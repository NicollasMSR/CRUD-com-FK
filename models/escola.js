module.exports = (sequelize, DataTypes) => {
    const Curso = sequelize.define("Escola", {
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
      Curso.associate = (models) => { 
        Curso.hasMany(models.Funcionario, { 
          foreignKey: "cursoId", 
          as: "funcionarios", 
        }); 
      };
    return Curso;

}; 