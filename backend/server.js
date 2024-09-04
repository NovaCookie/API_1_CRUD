const express = require("express");
const port = 5500;
const app = express();

//Middleware qui permet de traiter les données de la req
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

//Lancement server
app.listen(port, () => console.log("Le server à démarré sur le port " + port));
