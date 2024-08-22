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

const getAllUsersPosts = (req, res) =>
  res.render("index", { title: "Mini Message Board", messages: messages });

const getForm = (req, res) =>
  res.render("form", { title: "New Post", messages: messages });

const createPost = (req, res) => {
  const user = req.body.user;
  const text = req.body.text;
  messages.push({ text, user, added: new Date() });
  res.redirect("/");
};

module.exports = { getAllUsersPosts, getForm, createPost };
