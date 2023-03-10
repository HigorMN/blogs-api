module.exports = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true 
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    tableName: 'users',
    underscored: true,
    timestamps: false
  })

  UserTable.associate = ({ BlogPost }) => {
    UserTable.hasMany(BlogPost, {
      as: 'blogPosts',
      foreignKey: 'user_id',
    })
  }

  return UserTable;
}