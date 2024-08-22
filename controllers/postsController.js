const getPost = (req, res) => {
  const { user, text, date } = req.query;
  res.render("post", { title: "Post", user, text, date });
};

module.exports = getPost;
