const express = require("express");
const router = express.Router();
const { Aluno } = require("../models");

//Listar aluno
router.get("/", async (req, res) => {
  const alunos = await Aluno.findAll();
  res.render("base", {
    title: "Listar Alunos",
    view: "alunos/show",
    alunos,
  });
});

//add novo aluno - formulário
router.get("/add", async (req, res) => {
  res.render("base", {
    title: "Adicionar Aluno",
    view: "alunos/add",
  });
});

//add novo aluno - no bd
router.post("/add", async (req, res) => {
  try {
    await Aluno.create({
      nome: req.body.nome,
      email: req.body.email,
      rm: req.body.rm,
    });
    res.redirect("/alunos");
  } catch (error) {
    console.error("Erro ao adicionar aluno:", error);
    res.status(500).send("Erro ao adicionar aluno.");
  }
});

//edit aluno - formulário
router.get("/edit/:id", async (req, res) => {
  const aluno = await Aluno.findByPk(req.params.id);
  res.render("base", {
    title: "Editar Aluno",
    view: "alunos/edit",
    aluno,
  });
});

//edit aluno - no bd
router.post("/edit/:id", async (req, res) => {
  await Aluno.update(
    { nome: req.body.nome, email: req.body.email, rm: req.body.rm },
    { where: { id: req.params.id } }
  );
  res.redirect("/alunos");
});

//excluir aluno
router.post("/delete/:id", async (req, res) => {
  await Aluno.destroy({ where: { id: req.params.id } });
  res.redirect("/alunos");
});

module.exports = router;
