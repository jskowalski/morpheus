morpheus request
========
A morpheus request is an HTTP request which can contain a number of header values and/or query string name value pairs.

###Headers
Accept: A morpheus request WILL contain an Accept header with the value of application/morpheus

###Query Strings
morpheus uses query strings with resource collection  
q – A query value. The server will decide what the search actually means.  
limit – The number if records in a page of data.  
pageIndex – The request page index  
fields – The fields to return. If missing from the request the server should provide a default resource property list.  
include – The child resources to include with the requested resource.  
where – A more specific filtering method. The client can create complete predicates.  
orderby – The order of the list or items.  

###Examples
`/people?pageIndex=0&limit=10`
Gets the first 10 people resource records
/people?fields= personID,firstName,lastName &pageIndex=0&limit=10
Gets the first 10 people resource records and only returns the id, the first name and the last name.
/people?q=joe
Gets the first page of people resources that the server somehow matches to the keyword “joe”.
/people?where=firstname=’joe’
Gets the first page of people resources where the first name matches “joe”.






