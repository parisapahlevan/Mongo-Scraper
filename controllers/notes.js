var Note = require("../models/Note");
var makeDate = require("../scripts/date");
module.exports = {
  get: (data, cb) => {
      Note.find({
          _headlindId: data._id
      }, cb);
  },
  save: (data, cb) => {
      var newNote = {
          _headlineId: data._id,
          date: makeDate(),
          noteText: data.noteText
      };
      Note.create(newNote, (err, doc) => {
          if(err){
              console.log(err);
          } 
          else {
              console.log(doc);
              cb(doc)
          }
      });
  },

  delete: (data, cb) => {
      Note.remove({
          _id: data._id
      }, cb);
  }
}