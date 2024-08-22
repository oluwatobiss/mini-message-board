const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
  {
    text: "Hello Devs!",
    user: "David",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) =>
  res.render("index", { title: "Mini Messageboard", messages: messages })
);

indexRouter.get("/new", (req, res) =>
  res.render("form", { title: "New Post", messages: messages })
);

indexRouter.post("/new", (req, res) => {
  const user = req.body.user;
  const text = req.body.text;
  if (user && text) {
    messages.push({ text, user, added: new Date() });
    res.redirect("/");
  }
});

module.exports = indexRouter;
