const express = require("express");
const cors = require("cors");
const colorRoutes = require("./routers/colors");
const starwars = require("./routers/starwars");
const fortuneCookies = require("./routers/fortune-cookie");
const emojis = require("./routers/emojis");
const buzzWords = require("./routers/buzzwords");
const app = express();

app.use(cors({ credentials: true }));

// load routes here

app.get("/", (req, res) => res.send("5n1 API Server"));
colorRoutes(app);
starwars(app);
fortuneCookies(app);
emojis(app);
buzzWords(app);
app.listen(5000);
console.log("Server listening at 5000");
