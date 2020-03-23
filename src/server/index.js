const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser');
const cors = require('cors');
const aylien = require("aylien_textapi");
const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'))

const textapi = new aylien({
    application_id: process.env.AppId,
    application_key: process.env.APIkey
});

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'));
})

//app.get('/test', function (req, res) {
   //res.send(mockAPIResponse)
//})

app.post ("/PostURL", function (req, res){
    console.log(req.body);
    const urlName = req.body.url;
    textapi.sentiment({
        url: urlName
    }, function(error, response) {
        if (error === null) {
            console.log(response);
            res.send(response)
        } else {
            res.send(error)
        }
    });
    
})


// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

console.log(`Your API key is ${process.env.APIkey}`);

