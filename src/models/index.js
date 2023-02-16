const User = require("./User");
const Post = require("./Post");

User.hasOne(Post);
User.belongsTo(Post);
module.exports = { User, Post };
