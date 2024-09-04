const db = require("../db/queries");

async function getAllUsersPosts(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Mini Message Board", messages });
}

const getForm = (req, res) => res.render("form", { title: "New Post" });

async function createPost(req, res) {
  const user = req.body.user;
  const text = req.body.text;
  await db.insertMessage([user, text, new Date()]);
  res.redirect("/");
}

module.exports = { getAllUsersPosts, getForm, createPost };
