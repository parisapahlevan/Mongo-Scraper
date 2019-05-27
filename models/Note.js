


var mongoose = require("mongoose");
var schema = mongoose.Schema
var noteschema = new schema({
   _id: {
       type: schema.Types.ObjectId,
       //ref: "Headline"
   },
   note: {
       type: String,
       required: true
   },
    date:{
        type: Date,
        default: Date.now
    }
})

var note = mongoose.model("Note", noteschema)
module.exports = note;