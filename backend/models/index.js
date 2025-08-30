const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite"
});

// Post model
const Post = sequelize.define("Post", {
  title: { type: DataTypes.STRING, allowNull: false },
  slug: { type: DataTypes.STRING, unique: true },
  content: { type: DataTypes.TEXT, allowNull: false },
  views: { type: DataTypes.INTEGER, defaultValue: 0 }
});

// Sync database
sequelize.sync();

module.exports = { sequelize, Post };
