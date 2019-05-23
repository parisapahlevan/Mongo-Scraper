var scrape = require("../scripts/scrape");
var makeDate = require("../scripts/date");

var Headline = require("../models/Headline");

module.exports = {
    fetch: function(cb) {
        scrape(function(data){
            var articles = date;
            for (var i=0; i < articles.length; i++){
                articles[i].date = makeDate();
                articles[i].saved = false;
            }
            Headline.collection.insertMany(articles, {ordered:false}, function(err, docs){
                cb(err, docs);
            });
        });
    },

    delete: (query, cb) => {
        Headline.remove(query, cb);
    },

    get: (query, cb) => {
        Headline.find(query)
        .sort({
            _id: -1
        })
        .exec((query, cb) => {
            cb(doc);
        });
    },

    update: (query, cb) => {
        Headline.update({_id: query._id}, {
            $set:query
        }, {}, cb);
    }

}