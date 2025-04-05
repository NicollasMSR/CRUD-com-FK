module.exports = (sequelize, DataTypes) => {
  const Professor = sequelize.define("Professor", {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  /* 
    Categoria.associate = (models) => { 
      Categoria.hasMany(models.Produto, { 
        foreignKey: "categoriaId", 
        as: "produtos", 
      }); 
    };*/
  return Professor;
};
