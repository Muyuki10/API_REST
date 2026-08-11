const express = require('express');
const { router } = require('./src/routes/TesteRoutes');
const port = 3000;

const app = express()
app.use(express.json())

app.use( router )


app.listen(port, ()=>{
    console.log("http://localhost:3000")
})