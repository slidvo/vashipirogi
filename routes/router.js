const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");
router.get("/flav.ico", (req, res) => res.status(204));

//GET
router.get('/', controllers.get.index);

//Ignore flavicon.ico
router.get('/favicon.ico', (req, res) => res.status(204))

//POST
router.post('/create/order', controllers.post.create.order);


//INSERT

//UPDATE

//DELETE

module.exports = router;