const { Router } = require("express");
const {
  getAllUsersPosts,
  getForm,
  createPost,
} = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", getAllUsersPosts);
indexRouter.get("/new", getForm);
indexRouter.post("/new", createPost);

module.exports = indexRouter;
