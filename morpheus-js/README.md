morpheus.js
========
Returns a lits of people resources  
`var query = morpheus.resourceQuery().from('people');`  
`resourceManager.execute(query).then(function(response){`  
        `//do stuff with the response data`  
`});`  
  
Returns a single person resource  
`resourceManager.getResourceById('people', 101).then(function(response){`  
        `//do stuff with the response data`  
`});`  
  
Send a command  
`var command = new resourceCommand();`  
`command.resource = 'people';`  
`command.method = 'POST';`  
`command.body = '{}';`  
`resourceManager.execute(command).then(function(response){`  
        `//do stuff with the response data`  
`});`  




