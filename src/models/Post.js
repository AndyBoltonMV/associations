const { DataTypes } = require("sequelize"); // Importing the datatypes from sequelize library
const sequelize = require("../db/connection"); //Importing the constant that my database connection is stored in

const Post = sequelize.define("Post", {
  title: DataTypes.STRING,
  content: DataTypes.STRING,
});

module.exports = Post;
