var request = require("request");
var cheerio = require("cheerio");

var scrape = cb => {
    request("http://www.cnn.com", (err, res, body) => {
        var $ = cheerio.load(body);
        var articles = [];

        $(".cd cd--card cd--article cd--idx-10 cd--extra-small cd--has-siblings cd--media__image").each(function(i, element){
            var head = $(this).children(".cd_headline").text().trim();
            var sum = $(this).children(".cd__headline-text").text().trim();

            if(head && sum){
                var headClean =  head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
                var sumClean =  head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

                var dataToAdd = {
                    headline= headClean,
                    summery= sumClean
                };

                articles.push(dataToAdd);
            }
        });

        cb(articles);
        
    });
};

module.exports = scrape; 