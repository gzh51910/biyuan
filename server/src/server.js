const express = require('express');
const fs = require('fs');

const app = express();
const {PORT} = require('./config.json');

const allRouter = require('./routers');

app.use(express.static('./'))
app.use(allRouter);

app.use( function (request, response,next){
    let content=fs.readFileSync('./index.html')
    response.set('Content-Type','text/html;charset=utf-8')
    response.send(content)
})
app.listen(PORT,()=>{
    console.log(`Server is runing on port ${PORT}`)
})
