


var mongoose = require("mongoose");
var schema = mongoose.Schema
var noteschema = new schema({
   _headlineid: {
       type: schema.Types.ObjectId,
       ref: "Headline"
   },
   note: {
       type: string,
       required: true
   },
    date:{
        type: Date,
        default: Date.now
    }
})

var note = mongoose.model("Note", noteschema)
module.exports = note;