const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "Voici les données" });
});

router.post("/", (req, res) => {
    res.json({ message: req.body.message });
});

router.put("/:id", (req, res) => {
    res.json({ messageID: req.params.id });
});

router.delete("/:id", (req, res) => {
    res.json({ message : "Le message avec id : "+ req.params.id + " a été supprimé"});
});
module.exports = router