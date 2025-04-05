module.exports = (sequelize, DataTypes) => {
  const Aluno = sequelize.define("Aluno", {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rm: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  /* 
    Aluno.associate = (models) => { 
      Aluno.hasMany(models.Produto, { 
        foreignKey: "alunoId", 
        as: "alunos", 
      }); 
    };*/
  return Aluno;
};
