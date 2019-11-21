const express = require('express');
const bodyParser = require('body-parser');
const katex = require('katex');

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

app.post('/math', function(req, res){
   try
   {
        var html = katex.renderToString((req.body.expression),{//"c = \\pm\\sqrt{a^2 + b^2}", {
            throwOnError: false,
            displayMode: true,

        });
        console.log("Doing math on "+ req.body.expression);
        res.send(html);
    }catch(err){
        console.log("error on "+ req.body.expression)
    }
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

app.get('/getProjects', function(req, res){
    directoryPath = path.join(__dirname, 'slideshows');
    slideshows = [];
    fs.readdir(directoryPath, function (err, files){
        if (err){
            res.send("Error 404: Slideshow folder not found")
        }
        files.forEach(function (file){
                temp = {
                    directory: path.join(directoryPath,file),
                    name: file
                }
                this.slideshows.push(temp);
        });
        res.send(slideshows);
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