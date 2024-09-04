const { body, validationResult } = require("express-validator");
const db = require("../db/queries");

const messageFormValidator = body("user")
  .trim()
  .isAlpha()
  .withMessage("Username must contain letters only.")
  .isLength({ min: 4, max: 30 })
  .withMessage("Username must be between 4 to 30 characters.");

async function getAllUsersPosts(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Mini Message Board", messages });
}

const getForm = (req, res) => res.render("form", { title: "New Post" });

const createPost = [
  messageFormValidator,
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).render("form", {
        title: "New Post",
        errors: result.array(),
      });
    }
    const user = req.body.user;
    const text = req.body.text;
    await db.insertMessage([user, text, new Date()]);
    res.redirect("/");
  },
];

module.exports = { getAllUsersPosts, getForm, createPost };
