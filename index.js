require('dotenv').config();
const fs = require('fs');
const https = require('https');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


const routes = require("./routes/router");
const { Certificate } = require('crypto');

const certificates = {
    cert: fs.readFileSync("../certs/cert.crt"),
    key: fs.readFileSync("../certs/private.key")
};

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

app.use('/', routes);


const appHttps = https.createServer(certificates, app)
    .listen(process.env.HTTPS_PORT, process.env.HOST);
appHttps.on("listening", () => {
    console.log("Server is working");
});

const appHttp = http.createServer(app).listen(process.env.HTTP_PORT, process.env.HOST)