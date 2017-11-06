var names = require("starwars-names");
var allNames = names.all;

module.exports = app => {
  app.get("/starwars-names", (req, res) => {
    res.send(allNames);
  });
};
