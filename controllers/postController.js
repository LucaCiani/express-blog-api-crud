const posts = require("../data/postsData");

function index(req, res) {
    let filteredPosts = posts;
    if (req.query.tag) {
        filteredPosts = posts.filter((post) =>
            post.tags.includes(req.query.tag)
        );
    }
    res.json(filteredPosts);
}

function show(req, res) {
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
}

function store(req, res) {
    res.send("Crea un nuovo post");
}

function update(req, res) {
    res.send("Modifica integrale del post " + req.params.id);
}

function modify(req, res) {
    res.send("Modifica parziale del post " + req.params.id);
}

function destroy(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if (!post) {
        return res.status(404).json({
            error: "Not Found",
            message: "Post non trovato",
        });
    }
    posts.splice(posts.indexOf(post), 1);
    res.sendStatus(204);
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy,
};
