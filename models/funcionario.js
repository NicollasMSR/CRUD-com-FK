module.exports = (sequelize, DataTypes) => {
    const Funcionario = sequelize.define("Funcionario", {
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      CPF: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    });
      Funcionario.associate = (models) => { 
        Funcionario.belongsTo(models.Escola, { 
          foreignKey: "funcionarioid", 
          as: "Escolas", 
        }); 
      };
    return Funcionario;
  };
  