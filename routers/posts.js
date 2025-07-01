const express = require("express");
const router = express.Router();
const posts = require("../data/postsData");
const { error } = require("console");

router.get("/", (req, res) => {
    let filteredPosts = posts;
    if (req.query.tag) {
        filteredPosts = posts.filter((post) =>
            post.tags.includes(req.query.tag)
        );
    }
    res.json(filteredPosts);
});

router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if (post) {
        res.json({ message: "Ecco i dettagli del post", post });
    } else {
        res.status(404).json({
            error: "Not Found",
            message: "Post non trovato",
        });
    }
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
    id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if (!post) {
        return res.status(404).json({
            error: "Not Found",
            message: "Post non trovato",
        });
    }
    posts.splice(posts.indexOf(post), 1);
    res.sendStatus(204);
});

module.exports = router;
