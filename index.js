//IMPORT express
let express = require('express')

//CREATE new instance of an express app
let app = express()

app.get('/', (request, response)=>{
   response.json({
      text: `99 bottles of beer on the wall!`,
      url: `http://localhost:9000/98`,
   })
})
app.get('/:first',(request, response)=>{
   let num = request.params.first
   if( num > 0 ){ 
   response.json({
      text: `${num} bottles of beer on the wall!`,
      url: `http://localhost:9000/${num - 1}`,
   })
   }else{
      response.json({
      text: `${num} bottles of beer on the wall!`,
      url: `http://localhost:9000/`,
   })

   }
})
//LISTEN on port 9000
app.listen(9000)

