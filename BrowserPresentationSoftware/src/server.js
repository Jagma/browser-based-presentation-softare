const express = require('express');
const bodyParser = require('body-parser');
var fs = require('fs');
const path = require('path');

var https = require('https');
var app = express();
const PORT = 8088;

app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', function(req, res){
    res.send("No one should see this.");
});

app.get('/g', function(req, res){
    directoryPath = path.join(__dirname, 'Themes');
    themes = [];
    fs.readdir(directoryPath, function (err, files){
        if (err){
            res.send("Error 404: Themes folder not found")
        }
        files.forEach(function (file){
            if (path.extname(file) == '.css'){
                this.themes.push(path.join(__dirname,file));
            }
        });
        res.send(themes);
    })
});

app.get('/getThemes', function(req, res){
    directoryPath = path.join(__dirname, 'Themes');
    themes = [];
    fs.readdir(directoryPath, function (err, files){
        if (err){
            res.send("Error 404: Themes folder not found")
        }
        files.forEach(function (file){
            if (path.extname(file) == '.css'){
                temp = {
                    directory: path.join(__dirname,file),
                    name: path.basename(file, '.css')
                }
                this.themes.push(temp);
            }
        });
        res.send(themes);
    })
});


app.post('/newProject', function(req, res){
    try{
        PROJECT_DIR = path.join(__dirname, 'slideshows');
        fs.mkdirSync(path.join(PROJECT_DIR, req.body.title));
        fs.writeFileSync("slideshows/"+req.body.title+"/"+req.body.title+".json", JSON.stringify( req.body,null,2))
        fs.writeFileSync("slideshows/"+req.body.title+"/"+req.body.title+".md", "Hello Slideshow")
        res.sendStatus(200)
    } catch (e){
        res.sendStatus(409)
    }
        
 });

app.listen(PORT);