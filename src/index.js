const express = require('express')
const path = require('path')
const app = express(); 

 app.set('port', 8080); 
  
 app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'),() => {
  console.log(`server running on port ${app.get('port')}`)
})
