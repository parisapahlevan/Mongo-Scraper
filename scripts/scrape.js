var request = require("request");
var cheerio = require("cheerio");

var scrape = cb => {
    request("http://www.nytimes.com", (err, res, body) => {
        var $ = cheerio.load(body);
        var articles = [];

        $(".theme-summary").each(function(i, element){
            var head = $(this).children(".story-heading").text().trim();
            var sum = $(this).children(".summary").text().trim();

            if(head && sum){
                var headClean =  head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
                var sumClean =  head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

                var dataToAdd = {
                    headline: headClean,
                    summary: sumClean
                };

                articles.push(dataToAdd);
            }
        });

        cb(articles);
        
    });
};

module.exports = scrape; 