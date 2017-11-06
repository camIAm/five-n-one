let fortuneCookies = require("fortune-cookie");
const { prop, map, keys } = require("ramda");
const uuid = require("uuid");

const createCookies = k => ({
  id: uuid.v4(),
  name: k,
  value: prop(k, fortuneCookies)
});

fortuneCookies = map(createCookies, keys(fortuneCookies));

module.exports = app => {
  app.get("/fortune-cookie", (req, res) => {
    res.send(fortuneCookies);
  });
};
