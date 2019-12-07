const express = require('express');

const app = express();

const {PORT} = require('./config.json');

const allRouter = require('./routers');

app.use(express.static('./'))
app.use(allRouter);

app.listen(PORT,()=>{
    console.log(`Server is runing on port ${PORT}`)
})
// const express = require('express');

// const app = express();

// const {PORT} = require('./config.json');

// const allRouter = require('./routers');

// const path = require('path');






// //加载指定目录静态资源
// app.use(express.static(__dirname + '/dist'))

// //配置任何请求都转到index.html，而index.html会根据React-Router规则去匹配任何一个route
// app.get('*', function (request, response){
//   response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
// })

// app.use(allRouter);

// app.listen(PORT,()=>{
//     console.log(`Server is runing on port ${PORT}`)
// })