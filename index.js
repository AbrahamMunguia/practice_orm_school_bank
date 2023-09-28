const express = require("express")
const routerApi = require('./routes');

const app = express()
const PORT = 3000

app.get('/',(_,res)=>{
  res.send("Hello world! aka que imbecil")
})

routerApi(app);

app.listen(PORT)

