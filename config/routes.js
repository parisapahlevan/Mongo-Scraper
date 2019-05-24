 
 
 var scrape = require("../scripts/scrape");
 var headlinesController = require("../controllers/headlines");
 var noteController = require("../controllers/notes");
 
 
 
 module.exports = function (router) {
     router.get("/", (reg, res) => {
         res.render("home");
     });
     router.get("/saved", function (req, res) {
         res.render("saved");
     });
     router.get("/api/fetch", function (req, res) {
         headlinesController.fetch(function (err, docs) {
             if(!docs || docs.docs.insertedCount ===  0){
                 res.json({
                     message: "No New Articles today. Check back tomorrow!"
                 });
                }
                else {
                    res,json({
                        message: `Added ${docs.insertedCount} new articles!`
                    });
                }
             
         });
     });
     router.get("/api/headlines", function (req, res) {
         var query = {};
         if(req.query.saved){
             query = req.query;
         }
         headlinesController.get(query, function (data) {
             res.json(data)
         });
     });
     router.delete("/api/headlines/:id", function (req, res){
         var querry = {};
         query._id = req.params.id;
         headlinesController.delete(query, function (err, data) {
             res.json(data);
         });
     });
     router.patch("/api/headlines", function (req, res) {
         headlinesController.update(req.body, function (err, data) {
             res.json(data)
         });
     });
     router.get("/api/notes/:headline_id", function (req, res) {
         var query = {};
         if(req.params.headline_id){
             query._id = req.params.headline_id;
         }
         notesController.get(query, function (err, data){
             res.json(data);
         });
     });
     router.delete("/api/notes/:id", function (req, res){
         var query = {};
         query._id = req.params.id;
         noteController.delete(query, function (err, data) {
             res.json(data);
         });
     });
     router.post("/api/notes", function (req, res)  {
        noteController.save(req.body, function (data) {
            res.json(data)
        });
     });
 }