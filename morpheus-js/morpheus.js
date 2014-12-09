define(function (require) {
    var jQuery = require("jquery");
    var utils = require('pfa/utils');

    var promise = function () {
        var thenPointer = null;
        var errorPointer = null;

        var then = function (pointer) {
            thenPointer = pointer;
            return this;
        };

        var raiseThen = function (data) {
            if (thenPointer === null) return;
            thenPointer(data);
        };

        var error = function (pointer) {
            errorPointer = pointer;
            return this;
        };

        var raiseError = function (jqXHR, textStatus) {
            if (errorPointer === null) return;
            errorPointer(jqXHR, textStatus);
        };

        return {
            then: then,
            raiseThen: raiseThen,
            error: error,
            raiseError: raiseError
        };
    };

    var resourceQuery = function (args) {
        var a = typeof args == 'undefined' ? {} : args;
        var pageSize = typeof a.pageSize !== 'undefined' ? a.pageSize : 10;
        var pageIndex = typeof a.pageIndex !== 'undefined' ? a.pageIndex : 0;
        var selectString = typeof a.select !== 'undefined' ? a.select : '';
        var entityName = typeof a.from !== 'undefined' ? a.from : '';
        var orderByString = typeof a.orderBy !== 'undefined' ? a.orderBy : '';
        var whereString = typeof a.where !== 'undefined' ? a.where : '';
        var filterString = typeof a.filter !== 'undefined' ? a.filter : '';
        var includeString = typeof a.include !== 'undefined' ? a.include : '';
        var searchString = typeof a.search !== 'undefined' ? a.search : '';
        
        var from = function (entity) {
            entityName = entity;
            return this;
        };

        var select = function (fields) {
            selectString = fields;
            return this;
        };

        var where = function (predicates) {
            whereString = predicates;
            return this;
        };

        var filter = function (predicates) {
            filterString = predicates;
            return this;
        };

        var orderBy = function (fieldName, direction) {
            orderByString = fieldName + " " + direction;
            return this;
        };

        var include = function (includes) {
            includeString = includes;
            return this;
        };

        var search = function (searchValue) {
            searchString = searchValue;
            return this;
        };

        var query = {
            select: select,
            from: from,
            where: where,
            filter: filter,
            include: include,
            search: search,
            orderBy: orderBy
        };
        
        Object.defineProperty(query, "entityName", {
            get: function () {
                return entityName;
            }
        });
        
        Object.defineProperty(query, "pageSize", {
            get: function () {
                return pageSize;
            },
            set: function (value) {
                pageSize = value;
            }
        });

        Object.defineProperty(query, "pageIndex", {
            get: function () {
                return pageIndex;
            },
            set: function (value) {
                pageIndex = value;
            }
        });

        Object.defineProperty(query, "selectString", {
            get: function () {
                return selectString;
            }
        });

        Object.defineProperty(query, "searchString", {
            get: function () {
                return searchString;
            }
        });

        Object.defineProperty(query, "whereString", {
            get: function () {
                return whereString;
            }
        });

        Object.defineProperty(query, "filterString", {
            get: function () {
                return filterString;
            }
        });

        Object.defineProperty(query, "includeString", {
            get: function () {
                return includeString;
            }
        });

        Object.defineProperty(query, "orderByString", {
            get: function () {
                return orderByString;
            }
        });

        Object.defineProperty(query, "commandType", {
            get: function () {
                return 'query';
            }
        });

        return query;
    };

    var resourceCommand = function () {
        var requestData,
        entityName = null

        var resource = function (entity) {
            entityName = entity;
            return this;
        };

        var body = function (content) {
            requestData = content;
            return this;
        };

        var request = {
            resource: resource,
            body: body
        };

        Object.defineProperty(request, "entityName", {
            get: function () {
                return entityName;
            }
        });

        Object.defineProperty(request, "data", {
            get: function () {
                return requestData;
            }
        });

        Object.defineProperty(request, "commandType", {
            get: function () {
                return 'command';
            }
        });

        return request;
    };

    var resourceManager = function (dataService, useCache) {
        useCache = typeof useCache !== 'undefined' ? useCache : false;
        var ds = dataService;
        var entityCache = [];

        var hasChanges = function () {
            return false;
        };

        var getResourceById = function (entityName, id) {
            var p = new promise();

            ds.getEntity(entityName, id).then(function (data) {
                return p.raiseThen(data);
            });

            return p;
        };

        var execute = function (command) {
            try{
                if (typeof command === 'undefined') {
                    throw 'Morpheus says: No command present for resourceManager.execute(command)';
                }
                else if (command.commandType == 'query') {
                    return executeQuery(command);
                }
                else {
                    return executeCommand(command);
                }
            }
            catch(err){
                console.error(err + " '" + command.entityName + "'");
            }
        };

        var executeCommand = function (resourceCommand) {
            var p = new promise();

            ds.executeCommand(resourceCommand)
            .then(function(data){
                p.raiseThen(data);
            })
            .error(function(data, msg){
                p.raiseError(data, msg);
            });

            return p;
        };

        var executeQuery = function (resourceQuery) {
            var p = new promise();

            if (useCache == true) {
                p = executeQueryLocally(resourceQuery).then(function (data) {
                    if (typeof data !== 'undefined') {
                        executeQueryRemotely(resourceQuery).then(function (data) {
                            p.raiseThen(data);
                        })
                        .error(function (data, msg) {
                            p.raiseError(data, msg);
                        });

                    }
                    else {
                        p.raiseThen(data);
                    }
                });
            }
            else {
                executeQueryRemotely(resourceQuery)
                    .then(function (data) {
                        p.raiseThen(data);
                    })
                    .error(function (data, msg) {
                        p.raiseError(data, msg);
                    });
            }

            return p;
        };

        var executeQueryRemotely = function (resourceQuery) {
            var p = new promise();
            
            ds.executeQuery(resourceQuery)
                .then(function (response) {
                    var returnObj = {
                        header: {
                            count: 0
                        },
                        pageSize: resourceQuery.pageSize,
                        currentPageIndex: resourceQuery.pageIndex,
                        totalCount: 0
                    };

                    if (response.header) {
                        returnObj.header = response.header;
                        if (response.header.primaryKeyName) {
                            returnObj.header.primaryKeyName = utils.toFirstLetterCamelCase(returnObj.header.primaryKeyName);
                        }
                        if (response.header.resourceMap) {
                            header.resourceMap = response.header.resourceMap;
                        }
                        if (response.header.resourceName) {
                            header.resourceName = response.header.resourceName;
                        }
                    }
                    if (response.data) {
                        if (response.data.items) {
                            returnObj.items = response.data.items;
                        } else {
                            returnObj.data = response.data;
                        }
                        if (response.data.totalCount) {
                            returnObj.header.totalCount = response.data.totalCount;
                        }
                    } else {
                        if (Array.isArray(response)){
                            returnObj.items = response;
                            returnObj.header.count = response.length;
                        } else {
                            returnObj = response;
                        }
                    }

                    p.raiseThen(returnObj);
                })
                .error(function (error, msg) {
                    p.raiseError(error, msg);
                });

            return p;
        };

        var executeQueryLocally = function (resourceQuery) {
            //search cache
        };

        return {
            getResourceById: getResourceById,
            execute: execute
        };

    };

    var restService = function (rootUri) {
        var name = "restService";
        var links = {};
        var rootUri = rootUri;
        var apiID = apiID;
        var apiKey = apiKey;

        var getRootLinks = function () {
            var p = new promise();

            execute({ url: rootUri, method: 'GET' })
                .then(function (response) {
                    links = response.links;
                    p.raiseThen(response);
                });

            return p;
        };

        var setRootLinks = function(clientLinks){
            links = clientLinks;
        };

        var executeQuery = function (query) {
            var p = new promise();
            var link = getLink(query.entityName);
            link.url = rootUri + link.href + getQueryString(query);

            execute(link)
                .then(function (data) {
                    p.raiseThen(data);
                })
                .error(function (jqXHR, textStatus) {
                    p.raiseError(jqXHR, textStatus);
                });

            return p;
        };

        var executeCommand = function (resourceCommand) {
            var p = new promise();
            var link = getLink(resourceCommand.entityName);
            link.url = rootUri + link.href;

            execute(link, resourceCommand.data)
                .then(function (data) {
                    p.raiseThen(data);
                })
                .error(function (jqXHR, textStatus) {
                    p.raiseError(jqXHR, textStatus);
                });

            return p;
        }

        var getEntity = function (entityName, id) {
            var p = new promise();
            var link = getLink(entityName);
            link.url = rootUri + link.href + '/' + id;

            execute(link)
                .then(function (data) {
                    p.raiseThen(data);
                })
                .error(function (jqXHR, textStatus) {
                    p.raiseError(jqXHR, textStatus);
                });

            return p;
        };

        function getQueryString(query) {

            var qs = "?limit=" + query.pageSize + "&pageindex=" + query.pageIndex;

            if (query.selectString) {
                qs = qs + "&fields=" + query.selectString;
            }

            if (query.whereString) {
                qs = qs + "&where=" + query.whereString;
            }

            if (query.filterString) {
                qs = qs + "&filter=" + query.filterString;
            }

            if (query.orderByString) {
                qs = qs + "&orderby=" + query.orderByString;
            }

            if (query.includeString) {
                qs = qs + "&includes=" + query.includeString;
            }

            if (query.searchString) {
                qs = qs + "&q=" + query.searchString;
            }

            return qs;
        }

        function getLink(entityName) {
            for (var i = 0; i < links.length; i++) {
                if (links[i].rel.toLowerCase() === entityName.toLowerCase()) {
                    return links[i];
                }

            }

            throw "Route not found";
        }

        function execute(link, data) {
            var p = new promise();
            var token = "Bearer fa259b6d-ec0e-415d-9de4-40a17d64f5b3";

            var request = {
                type: link.method,
                url: link.url,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: data,
                beforeSend: function (xhr) {
                    if (typeof token !== 'undefined')
                        xhr.setRequestHeader("Authorization", token);
                }
            }

            $.support.cors = true;

            console.group('Executing Morpheus Request: %s %s %o', request.type, request.url, request);
            $.ajax(request).done(function (response) {
                console.info('Request Succeeded. Response: %o', response);
                console.groupEnd();
                p.raiseThen(response);
            })
            .fail(function (jqXHR, textStatus) {
                console.warn('Request Failed: %o, %o', jqXHR, textStatus);
                console.groupEnd();
                p.raiseError(jqXHR, textStatus);
            });

            return p;
        }

        var isHypermediaLoaded = function () {
            if (links instanceof Array && links.length > 0) {
                return true;
            }
            else {
                return false;
            };
        };

        return {
            name: name,
            getEntity: getEntity,
            executeCommand: executeCommand,
            executeQuery: executeQuery,
            getRootLinks: getRootLinks,
            setRootLinks: setRootLinks,
            isHypermediaLoaded: isHypermediaLoaded
        };

        
    };

    return {
        resourceManager: resourceManager,
        resourceQuery: resourceQuery,
        resourceCommand: resourceCommand,
        restService: restService,
        promise: promise        
    };

});