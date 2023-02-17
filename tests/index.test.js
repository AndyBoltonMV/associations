const sequelize = require("../src/db/connection");
const { User, Post } = require("../src/models");
let currentId;

beforeAll(async () => {
  // This code will happen at the start of this files testing
  await sequelize.sync({ force: true });
});

beforeEach(async () => {
  // This code will happen before each test/it block
});

afterEach(async () => {
  // This code will happen after each test/it block
  await User.destroy({ where: { id: { [Op.gte]: 0 } } });
  await Post.destroy({ where: { id: { [Op.gte]: 0 } } });
});

afterAll(async () => {
  // This code will happen after all tests in this file are finished
  await sequelize.drop();
});

test("should first", () => {
  const user = User.create({ username: "AndyB" });
});
