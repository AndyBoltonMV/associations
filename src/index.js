const { User, Post } = require("./models");
const sequelize = require("./db/connection/");

async function main() {
  await sequelize.sync({ force: true });

  const newUser = await User.create({
    username: "Andy",
    email: "andy@email.com",
    password: "test123",
  });
  const newPost = await Post.create({
    title: "Boss Post",
    content: "Some top tier funny stuff",
  });

  await newUser.addPost(newPost);
}

main();
