const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Post } = require("./models");

const app = express();
app.use(cors());
app.use(bodyParser.json());

/* Routes */

// Get all posts
app.get("/api/posts", async (req, res) => {
  const posts = await Post.findAll();
  res.json(posts);
});

// Get one post + increment view count
app.get("/api/posts/:slug", async (req, res) => {
  const { slug } = req.params;
  const post = await Post.findOne({ where: { slug } });
  if (!post) return res.status(404).json({ error: "Not found" });

  await post.increment("views");
  res.json(post);
});

// Create a new post
app.post("/api/posts", async (req, res) => {
  const { title, slug, content } = req.body;
  try {
    const newPost = await Post.create({ title, slug, content });
    res.json(newPost);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
