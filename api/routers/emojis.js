var el = require("emojis-list");
const { prop, map, isNil, append, keys } = require("ramda");
const uuid = require("uuid");
const bodyParser = require("body-parser");
const emoji = require("node-emoji");

const createEmojis = k => ({
  id: uuid.v4(),
  name: k,
  value: prop(k, el)
});

let emojis = map(createEmojis, keys(el));

module.exports = app => {
  app.use(bodyParser.json());

  app.get("/emojis", (req, res) => {
    console.log("express api GET: ", req.body);
    res.send(emojis);
  });

  app.post("/emojis", (req, res) => {
    console.log("express api POST:", req.body);
    if (isNil(req.body)) {
      res.status(500).send({
        ok: false,
        message:
          "Must have a json document {id, name, value} to post a document"
      });
      return;
    }
    req.body.id = uuid.v4();
    console.log("req.bodystuff: ", {
      id: req.body.id,
      name: emoji.get(`${req.body.name}`)
    });

    emojis = append(
      { id: req.body.id, name: emoji.get(`${req.body.name}`) },
      emojis
    );
    res.send({ ok: true });
  });
};
