const express = require("express");
const router = express.Router();
const posts = require("../data/postsData");

router.get("/", (req, res) => {
    res.json(posts);
});

router.get("/:id", (req, res) => {
    const post = posts[req.params.id - 1];
    res.json({ message: "Ecco i dettagli del post", post });
});

router.post("/", (req, res) => {
    res.send("Crea un nuovo post");
});

router.put("/:id", (req, res) => {
    res.send("Modifica integrale del post " + req.params.id);
});

router.patch("/:id", (req, res) => {
    res.send("Modifica parziale del post " + req.params.id);
});

router.delete("/:id", (req, res) => {
    res.send("Elimina il post " + req.params.id);
});

module.exports = router;
