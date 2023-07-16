//dependencies

const express = require('express')
const app = express()

require('dotenv').config();
const PORT = process.env.PORT;

//routes

app.get('/', (req, res) =>{
    res.send('Hello, world!')
})




//listen

app.listen(3000, function() { 
    console.log(`Server is running! http://localhost:${PORT}`)
})

module.exports = app;