 module.exports = function(router){
     router.get("/", function(reg, res){
         res.render("home");
     });
     router.get("/saved", function(req, res){
         res.render("saved");
     });
 }