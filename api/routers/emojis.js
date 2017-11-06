var el = require("emojis-list");
const { prop, map, keys } = require("ramda");
const uuid = require("uuid");

const createEmojis = k => ({
  id: uuid.v4(),
  name: k,
  value: prop(k, el)
});

const emojis = map(createEmojis, keys(el));

module.exports = module.exports = app => {
  app.get("/emojis", (req, res) => {
    res.send(emojis);
  });
};
