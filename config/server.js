var express = require('express'),
    app = express(),
    fs = require('fs'),
    data;

app.use(express.static('src'));

fs.readFile('./config/data.json',{encoding: "utf8"}, function read(err, res) {
    data = JSON.parse(res);
});

app.get("/api/v1/menu", function (req, res, next) {
    if(Object.keys(req.query).length !== 0){
        if(req.query.query){
            var query = req.query.query.split(" ");
            var newData = data.filter(function(x, idx){
                if(query.length === 1 && x.name.toLowerCase().indexOf(query[0].toLowerCase()) !== -1){ return x; }
                else{
                    return query.some(function (qx) {
                        return x.name.toLowerCase().indexOf(qx.toLowerCase()) !== -1;
                    });
                }
            });
            res.send(newData);
        }
        if(req.query.category){
            var newData = data.filter(function (x) {return x.category === req.query.category;});
            res.send(newData);
        }
    }else{
        res.send(data)
    }
});

app.listen(7777, function () {
    console.log('Listening on port 7777!');
});