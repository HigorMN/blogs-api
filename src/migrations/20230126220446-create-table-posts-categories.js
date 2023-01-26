'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', {
      postId: {
        allowNull: false,
        fields: 'post_id',
        primaryKey: true,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'blog_posts',
          key: 'id'
        },
      },
      categoryId: {
        allowNull: false,
        fields: 'category_id',
        primaryKey: true,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'categories',
          key: 'id'
        },
      },
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('posts_categories');
  }
};
