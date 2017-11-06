var buzzwords = require("buzzwords");
const { prop, map, keys } = require("ramda");

const uuid = require("uuid");

const createBuzzWords = k => ({
  id: uuid.v4(),
  name: k,
  value: prop(k, buzzwords)
});

const allBuzzWords = map(createBuzzWords, keys(buzzwords));

module.exports = app => {
  app.get("/buzz-words", (req, res) => {
    res.send(allBuzzWords);
  });
};
