const express = require("express");
const app = express();
const port = 3030;

const postsRoute = require("./routers/posts");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Server dei post in esecuzione!");
});

app.use("/posts", postsRoute);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
