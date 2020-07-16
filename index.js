const fs = require('fs');
const https = require('https');
const express = require('express');
const app = express();

const routes = require("./routes/router");
const { Certificate } = require('crypto');

const certificates = {
    cert: fs.readFileSync("./certs/cert.crt"),
    key: fs.readFileSync("./certs/private.key")
};

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use('/', routes);


const appHttps = https.createServer(certificates, app)
    .listen(8000, "192.168.1.248");

appHttps.on("listening", () => {
    console.log("Server is working");
});