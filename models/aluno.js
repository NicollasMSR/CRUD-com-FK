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
    Aluno.associate = (models) => { 
      Aluno.belongsTo(models.Curso, { 
        foreignKey: "alunoId", 
        as: "Cursos", 
      }); 
    };
  return Aluno;
};
