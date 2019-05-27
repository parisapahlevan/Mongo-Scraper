var Note = require("../models/Note");
var makeDate = require("../scripts/date");
var ObjectId = require('mongodb').ObjectID;

module.exports = {
  get: function (data, cb) {
      Note.find({_id: data._id}, cb);
  },
  save: function (data, cb) {
      var newNote = {
          _id: data._id,
          date: makeDate(),
          note: data.noteText
      };
      Note.create(newNote, function (err, doc) {
          if(err){
              console.log(err);
          } 
          else {
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