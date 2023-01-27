module.exports = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define('PostCategory', {
    postId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true, 
    },
    categoryId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true, 
    },
  }, {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false
  })

  PostCategoryTable.associate = ({ BlogPost, Category}) => {
    BlogPost.belongsToMany(Category, {
      as: 'posts',
      through: PostCategoryTable,
      foreignKey: 'post_id',
      otherKey: 'category_id',
    })

    Category.belongsToMany(BlogPost, {
      as: 'categories',
      through: PostCategoryTable,
      foreignKey: 'category_id',
      otherKey: 'post_id',
    })
  }

  return PostCategoryTable;
}