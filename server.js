const express = require('express');
const { router } = require('./src/routes/TesteRoutes');
const path = require('path')
const port = 3000;

const app = express()
app.use(express.json())



app.use( router )

//tratando 404 com html
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname, './src/view/404.html'))
})

app.listen(port, ()=>{
    console.log("http://localhost:3000")
})