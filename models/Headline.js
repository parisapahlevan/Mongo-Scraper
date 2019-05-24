


var mongoose = require("mongoose");
var schema = mongoose.Schema;
var headlinesschema = new schema({
    title:{
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true 
    },
    date:{
        type: Date,
        default: Date.now
    },
    saved:{
        type:Boolean,
        default: false
    }
})

var headline = mongoose.model("Headline", headlinesschema)
module.exports = headline;