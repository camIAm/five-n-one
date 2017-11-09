let fortuneCookies = require("fortune-cookie");
const { prop, map, keys, append, isNil } = require("ramda");
const uuid = require("uuid");
const bodyParser = require("body-parser");

const createCookies = k => ({
  id: uuid.v4(),
  name: k,
  value: prop(k, fortuneCookies)
});

fortuneCookies = map(createCookies, keys(fortuneCookies));

module.exports = app => {
  app.use(bodyParser.json());
  app.get("/fortune-cookie", (req, res) => {
    console.log("express api GET:", req.body);
    res.send(fortuneCookies);
  });

  app.post("/fortune-cookie", (req, res) => {
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
    fortuneCookies = append(req.body, fortuneCookies);
    res.send({ ok: true });
  });
};
