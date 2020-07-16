const getRes = require("../responses/getResponses")
this.get = Object.create(null);
//this.post
//this.delete
this.get.index = function(req, res) {
    getRes.index(req, res);
}

module.exports.getIndex = this.get;