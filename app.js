const express = require('express');
const app = express();
const path = require('path');

//setting static files
app.use('/css',express.static(path.join(__dirname,'public/css')));

//set view engine
app.set('view engine','ejs');
app.set('views','views');

app.get('/',(req,res)=>{
    res.send('Hello from node js server');
})
app.listen(3000,()=>{
    console.log(`Server started at 3000 http://localhost:3000`);
})