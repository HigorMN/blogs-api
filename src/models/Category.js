module.exports = (sequelize, DataTypes) => {
  const CategoryTable = sequelize.define('Category', {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true 
    },
    name: DataTypes.STRING,
  }, {
    tableName: 'categories',
    underscored: true,
    timestamps: false
  })

  return CategoryTable;
}