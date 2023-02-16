const { DataTypes } = require("sequelize"); // Importing the DataTypes object from the sequelize library
const sequelize = require("../db/connection.js"); // Import the constant that my database connection is stored in

const Post = sequelize.define("Post", {
  title: DataTypes.STRING,
  content: DataTypes.STRING,
});

module.exports = Post;
