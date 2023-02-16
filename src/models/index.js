const User = require("./User");
const Post = require("./Post");

// One to One relationship
// User.hasOne(Post);
// User.belongsTo(Post);

// One to Many relationship
User.hasMany(Post);
Post.belongsTo(User);

// Many to Many relationship
// User.belongsToMany(Post, { through: "union" });
// Post.belongsToMany(User, { through: "union" });

module.exports = {
  User,
  Post,
};
