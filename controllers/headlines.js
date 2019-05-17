var scrape = require("../scripts/scrape");
var makeDate = require("../scripts/date");

var Headline = require("../models/Headline");

module.exports = {
    fetch: cb => {
        scrape(date => {
            var articles = date;
            for ( let i=0; i < articles.length; i++){
                articles[i].date = makeDate();
                articles[i].saved = false;
            }
            Headline.collection.insertMany(articles, {ordered:false}, (err, docs) => {
                cb(err, docs);
            });
        });
    },
    delete: (query, cb) => {
        Headline.remove(query, cb);
    }
}