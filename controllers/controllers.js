const responses = require("../responses/responses")


//this.delete

//GET
let get = Object.create(null);
get.index = function(req, res) {
    responses.get.index(req, res);
}
get.thnx = function(req, res) {
    responses.get.thnx(req, res);
}

module.exports.get = get;

//POST
let post = Object.create(null);
let create = Object.create(null);

create.order = function(req, res) {
    responses.post.create.order(req, res);
}



post = { create }
module.exports.post = post;