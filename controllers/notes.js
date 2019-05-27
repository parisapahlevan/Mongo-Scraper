var Note = require("../models/Note");
var makeDate = require("../scripts/date");
var ObjectId = require('mongodb').ObjectID;

module.exports = {
  get: function (data, cb) {
      var ID = new ObjectId(data._id)
      console.log("ID : ", ID);
      Note.find({
          _id: ID
      }, (doc)=>{
          console.log("FOUNT ONE DOC: ", doc)
        return cb(doc);
      });
  },
  save: function (data, cb) {
      var newNote = {
          _headlineId: data._id,
          date: makeDate(),
          noteText: data.noteText
      };
      Note.create(newNote, function (err, doc) {
          if(err){
              console.log(err);
          } 
          else {
              console.log(doc);
              cb(doc)
          }
      });
  },

  delete: function (data, cb){
      Note.remove({
          _id: data._id
      }, cb);
  }
}