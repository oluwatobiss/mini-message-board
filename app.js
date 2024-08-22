const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const postsRouter = require("./routes/postsRouter");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.use("/posts", postsRouter);

app.listen(port, () =>
  console.log(`Server listening for requests at port: ${port}!`)
);
