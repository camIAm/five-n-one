var buzzwords = require("buzzwords");
const { prop, map, keys, append, isNil } = require("ramda");
const bodyParser = require("body-parser");
const uuid = require("uuid");

const createBuzzWords = k => ({
  id: uuid.v4(),
  name: k,
  value: prop(k, buzzwords)
});

let allBuzzWords = map(createBuzzWords, keys(buzzwords));

module.exports = app => {
  app.use(bodyParser.json());
  app.get("/buzz-words", (req, res) => {
    res.send(allBuzzWords);
  });

  app.post("/buzz-words", (req, res) => {
    console.log("express api POST:", res.body);
    if (isNil(req.body)) {
      res.status(500).send({
        ok: false,
        message:
          "Must have a json document {id, name, value} to post a document"
      });
      return;
    }
    req.body.id = uuid.v4();
    allBuzzWords = append(req.body, allBuzzWords);
    res.send({ ok: true });
  });
};
