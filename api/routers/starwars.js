var names = require("starwars-names");
const { prop, map, keys } = require("ramda");

const uuid = require("uuid");
var allNames = names.all;

const createStarWars = k => ({
  id: uuid.v4(),
  name: k,
  value: prop(k, allNames)
});

const allStarWars = map(createStarWars, keys(allNames));

module.exports = app => {
  app.get("/starwars", (req, res) => {
    res.send(allStarWars);
  });
};
