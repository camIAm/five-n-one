const csscolorsObj = require("css-color-names");
const { prop, map, keys, append, isNil, find, propEq } = require("ramda");
const uuid = require("uuid");
const bodyParser = require("body-parser");

// create color document
const createColor = k => ({
  id: uuid.v4(),
  name: k,
  value: prop(k, csscolorsObj)
});

let colors = map(createColor, keys(csscolorsObj));

module.exports = app => {
  app.use(bodyParser.json());

  app.get("/colors", (req, res) => {
    console.log("express api COLOR GET:", req.body);
    res.send(colors);
  });

  app.get("/colors/:id", (req, res) => {
    console.log(find(propEq("id", req.params.id))(colors));
    res.send(find(propEq("id", req.params.id))(colors));
  });

  app.post("/colors", (req, res) => {
    console.log("express api COLOR POST:", req.body);
    if (isNil(req.body)) {
      res.status(500).send({
        ok: false,
        message:
          "Must have a json document {id, name, value} to post a document"
      });
      return;
    }
    req.body.id = uuid.v4();
    colors = append(req.body, colors);
    res.send({ ok: true });
  });
};
