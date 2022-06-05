const express = require("express");
const app = express();
  
// Define routes here ...
  
// app.listen(3000, function(){
//   console.log("server is running on port 3000");
// })


const https = require('https');

let main = "https://sandbox.primetrust.com";

// post a json request to the sandbox api   
function post( url, data, callback) {
    let options = { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };
    let req = https.request(url, options, function(res) {
        let body = '';
        res.on('data', function(d) {
            body += d;
        });
        res.on('end', function() {
            let parsed = JSON.parse(body);
            callback(parsed);
        });
    });
    req.write(JSON.stringify(data));
    req.end();
}
function postcred( url, data, callback) {
    let options = { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Authorization" : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.XbPkZgjwKgJWzQ7q6MYM7XhDk7VcB4y_gOGgjJBTq4uM'
        }
    };
    let req = https.request(url, options, function(res) {
        let body = '';
        res.on('data', function(d) {
            body += d;
        });
        res.on('end', function() {
            let parsed = JSON.parse(body);
            callback(parsed);
        });
    });
    req.write(JSON.stringify(data));
    req.end();
}
// get a json request to the sandbox api
function get(url, callback) {
    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };
    let req = https.request(url, options, function(res) {
        let body = '';
        res.on('data', function(d) {
            body += d;
        });
        res.on('end', function() {
            let parsed = JSON.parse(body);
            callback(parsed);
        });
    });
    req.end();
}

function getuser(url, data, callback) {
    let options = { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization' : 'Basic ' + new Buffer('ab@gmail.com:Qwerty123@').toString('base64')
        }
    };
    let req = https.request(url, options, function(res) {
        let body = '';
        res.on('data', function(d) {
            body += d;
        });
        res.on('end', function() {
            let parsed = JSON.parse(body);
            callback(parsed);
        });
    });
    req.write(JSON.stringify(data));
    req.end();
}
module.exports = { post, get, getuser, postcred };
