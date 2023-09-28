const express = require("express")

const app = express()
const PORT = 3000
const routerAPI = require('./routes/index')
app.get('/',(req,res)=>{
  res.send("Hello world!")
})
routerAPI(app)
app.listen(PORT,()=>{

})

