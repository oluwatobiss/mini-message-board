const { Router } = require("express");
const {
  getPosts,
  getForm,
  createPost,
} = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", getPosts);
indexRouter.get("/new", getForm);
indexRouter.post("/new", createPost);

module.exports = indexRouter;
