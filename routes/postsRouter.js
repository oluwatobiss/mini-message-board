const { Router } = require("express");
const getPost = require("../controllers/postsController");

const postsRouter = Router();

postsRouter.get("/", getPost);

module.exports = postsRouter;
