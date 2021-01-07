var mongoose = require("mongoose");
var productschema = mongoose.Schema({
    name:String,
    price:Number,
    id:String,
    colour: String,
});
const productmodel = mongoose.model("products",productschema);

module.exports=productmodel;
