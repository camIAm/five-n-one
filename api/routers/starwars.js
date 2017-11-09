var names = require("starwars-names");
const { prop, map, keys, append, isNil } = require("ramda");
const bodyParser = require("body-parser");

const uuid = require("uuid");
var allNames = names.all;

const createStarWars = k => ({
    id: uuid.v4(),
    name: k,
    value: prop(k, allNames)
});

let allStarWars = map(createStarWars, keys(allNames));

module.exports = app => {
    app.use(bodyParser.json());

    app.get("/starwars", (req, res) => {
        console.log("GET starwars", req.body);
        res.send(allStarWars);
    });

    app.post("/starwars", (req, res) => {
        console.log("express api STARTWARS POST:", req.body);
        if (isNil(req.body)) {
            res.status(500).send({
                ok: false,
                message: "Must have a json document {id, name, value} to post a document"
            });
            return;
        }
        req.body.id = uuid.v4();
        allStarWars = append(req.body, allStarWars);
        res.send({ ok: true });
    });
};