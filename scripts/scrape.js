var request = require("request");
var cheerio = require("cheerio");
var _  = require('lodash');
var makeDate = require("../scripts/date");

var scrape = function (cb) {
    request("https://www.nytimes.com/", function (err, res, body) {
        var $ = cheerio.load(body);
        var articles = [];
        $("article").each(function(i, element){ 
            var header= $(element).find("span").text().trim() || null;
            var summary= $(element).find("li").text().trim() || null;
            var link= $(element).find("a").attr("href") || null;
            var article = {
                title: header,
                summary: summary,
                url: "https://www.nytimes.com"+link
            }
            if(!_.isEmpty(header) && !_.isEmpty(summary) && !_.isEmpty(link)){
                article.date = makeDate();
                article.saved = false;
                articles.push(article);
            }
        });
        cb(articles);
    });
};

module.exports = scrape; 