var friends = require("../data/friends");

module.exports = function(app) {
   
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
       friends.push(req.body);
      
   });
  
    /*// ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!
  
    app.post("/api/clear", function() {
      // Empty out the arrays of data
      tableData = [];
      waitListData = [];
  
      console.log(tableData);
    });*/
  };
  