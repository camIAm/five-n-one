const fortuneCookies = require("fortune-cookie");
console.log("fortuneCookies", fortuneCookies);
module.exports = app => {
  app.get("/fortune-cookie", (req, res) => {
    res.send(fortuneCookies);
  });
};
