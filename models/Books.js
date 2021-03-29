const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Books extends Model {
  static uplikes(body, models) {
    return models.Like.create({
      user_id: body.user_id,
      book_id: body.book_id
    }).then(() => {
      return Books.findOne({
        where: {
          id: body.book_id
        },
        attributes: [
          'id',
          'title',
          'author',
          'genre',
          'published',
          'pages',
          [sequelize.literal('(SELECT COUNT(*) FROM like WHERE books.id = like.book_id)'), 'like_count']
        ],
      });
    });
  }
}

Books.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    published: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pages: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'books'
  }
);

module.exports = Books;