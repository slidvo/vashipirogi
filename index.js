const fs = require('fs');
const https = require('https');
const express = require('express');
const app = express();

/**
 * const router
 
 */
//const certificates = (cert:,key:);

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "./public"));

const appHttps = https.createServer(certifucates, app)
    .listen(process.env.PORT, process.env.HOST);

appHttps.on("listening", () => {
    console.log("Server is working");
    console.info("PORT :", process.env.PORT);
    console.info("HOST :", process.env.HOST);
});