var request = require("request");
var cheerio = require("cheerio");

var scrape = function (cb) {
    request("https://www.nytimes.com/", function (err, res, body) {
        var $ = cheerio.load(body);
        var articles = [];
        // console.log("\n\n-------------------------------------------------- BODY IS: ")
        // console.log(body)
        // console.log("--------------------------------------------------\n\n")
        //card__headlines
        $("article").each(function(i, element){           
            var head = $(element).find("span").text().trim();
            var sum = $(element).find("li").text().trim();
            var link = $(element).find("a").attr("href");
            console.log("\n\n-------------------------------------------------- head: ", i)
            console.log({
                header: head,
                summary: sum,
                linkToArticle: link
            })
            console.log("--------------------------------------------------\n\n")
            if(head && sum){
                var headClean =  head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
                var sumClean =  head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

                var dataToAdd = {
                    headline: headClean,
                    summary: sumClean
                };

                articles.push(dataToAdd);
                //console.log(articles)
            }
        });

        cb(articles);
        
    });
};

module.exports = scrape; 