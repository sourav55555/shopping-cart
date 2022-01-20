const path= require('path');
const express = require('express');
const app= express();
const port= process.env.PORT || 9000;

const staticPath= (path.join(__dirname,"/public"));
app.use(express.static(staticPath));

app.get("/",(req,res)=>{
    res.send("welcome to my new page");
})
app.listen(port,()=>{
    console.log("listening")
})