const express = require("express");
const router = express.Router();
const { Funcionario } = require("../models");

//Listar aluno
router.get("/", async (req, res) => {
  const funcionarios = await Funcionario.findAll();
  res.render("base", {
    title: "Listar Funcionarios",
    view: "funcionarios/show",
    funcionarios,
  });
});

//add novo aluno - formulário
router.get("/add", async (req, res) => {
  res.render("base", {
    title: "Adicionar Funcionario",
    view: "funcionarios/add",
  });
});

//add novo aluno - no bd
router.post("/add", async (req, res) => {
  try {
    await Funcionario.create({
      nome: req.body.nome,
      email: req.body.email,
      rm: req.body.rm,
    });
    res.redirect("/funcionarios");
  } catch (error) {
    console.error("Erro ao adicionar funcionario:", error);
    res.status(500).send("Erro ao adicionar funcionario.");
  }
});

//edit aluno - formulário
router.get("/edit/:id", async (req, res) => {
  const funcionario = await Funcionario.findByPk(req.params.id);
  res.render("base", {
    title: "Editar Funcionario",
    view: "funcionarios/edit",
    funcionario,
  });
});

//edit aluno - no bd
router.post("/edit/:id", async (req, res) => {
  await Funcionario.update(
    { nome: req.body.nome, email: req.body.email, rm: req.body.rm },
    { where: { id: req.params.id } }
  );
  res.redirect("/funcionarios");
});

//excluir aluno
router.post("/delete/:id", async (req, res) => {
  await Funcionario.destroy({ where: { id: req.params.id } });
  res.redirect("/funcionarios");
});

module.exports = router;
