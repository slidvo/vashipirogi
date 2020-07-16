const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");
router.get("/flav.ico", (req, res) => res.status(204));

//GET
router.get('/', controllers.get.index);

//POST


//INSERT

//UPDATE

//DELETE

module.exports = router;