var el = require("emojis-list");
console.log(el);
module.exports = module.exports = app => {
  app.get("/emoji-list", (req, res) => {
    res.send(el);
  });
};
