const path = require("path");
const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const server = http.createServer(app);

const cors = require("cors");
app.use(cors());

const db = require("./config/key").mongoURI;
const router = require("./router");

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
