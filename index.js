const express = require('express');

var bodyparser = require('body-parser')
const app = express();
app.use(bodyparser.urlencoded({extended:false}));
const port = 3000

app.get("/random", function(req, res){
    res.send("" + Math.floor(Math.random()*10000));
});

app.post('/sayhello', function(req, res){
    res.send("Hello "+ req.body.name);
})
app.post('/getform', function(req, res){
    res.json({
        name: req.body.name,
        age: req.body.age,
        dept: req.body.dept

    })
})
app.listen(port);
