const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods","POST,GET");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8;");
    res.header("Content-Type", "");
    next();
});

app.get('/',(req,res)=>{
    res.send('hello world');
});

app.post('/postTest',(req,res)=>{
    console.log(req.body);
    let obj = {
        name:'罗淦',
        age:'21'
    }
    res.send(obj);
})



app.listen(8080,()=>{
	console.log('running!');
});