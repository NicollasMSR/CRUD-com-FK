const express = require("express");

const path = require("path");

const app = express();

const db = require("./models");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Configuração do EJS como view engine

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

// Rota principal

const indexRouter = require("./routes/index");

app.use("/", indexRouter);

// Rotas para categorias e produtos

const categoriaRouter = require("./routes/categorias");

const alunoRouter = require("./routes/alunos");

const funcionarioRouter = require("./routes/funcionarios");

const escolaRouter = require("./routes/escolas");

const cursoRouter = require("./routes/cursos");

const professoresRouter = require("./routes/professores");

const produtoRouter = require("./routes/produtos");

app.use("/categorias", categoriaRouter);

app.use("/produtos", produtoRouter);

app.use("/alunos", alunoRouter);
app.use("/funcionarios", funcionarioRouter);
app.use("/escolas", escolaRouter);
app.use("/cursos", cursoRouter);
app.use("/professores", professoresRouter);

// Iniciar o servidor e sincronizar com o banco de dados

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Servidor em execução na porta 3000");
  });
});
