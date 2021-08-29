const express = require("express");
const router = express.Router();
const path = require("path");

const Comment = require("./controller/CommentController");

router.get("/api/index", async (req, res) => {
  const comment = await Comment.index();
  if (comment) {
    res.status(200).send(comment);
  } else {
    res.status(200).send({});
  }
});

router.post("/api/create", async (req, res) => {
  const comment = await Comment.create(req);
  if (comment) {
    res.status(200).send(comment);
  } else {
    res.status(200).send({});
  }
});

router.get("/api/show/:id", async (req, res) => {
  const comment = await Comment.show({ _id: req.params.id });
  if (comment) {
    res.status(200).send(comment);
  } else {
    res.status(200).send({});
  }
});

router.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

module.exports = router;
