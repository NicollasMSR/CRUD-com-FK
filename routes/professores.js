const express = require("express");
const router = express.Router();
const { Professor } = require("../models");

//Listar professor
router.get("/", async (req, res) => {
  const professores = await Professor.findAll();
  res.render("base", {
    title: "Listar Professores",
    view: "professores/show",
    professores,
  });
});

//add novo professor - formulário
router.get("/add", async (req, res) => {
  res.render("base", {
    title: "Adicionar Professor",
    view: "professores/add",
  });
});

//add novo professor - no bd
router.post("/add", async (req, res) => {
  try {
    await Professor.create({ nome: req.body.nome, email: req.body.email });
    res.redirect("/professores");
  } catch (error) {
    console.error("Erro ao adicionar professor:", error);
    res.status(500).send("Erro ao adicionar professor.");
  }
});

//edit professor - formulário
router.get("/edit/:id", async (req, res) => {
  const professor = await Professor.findByPk(req.params.id);
  res.render("base", {
    title: "Editar Professor",
    view: "professores/edit",
    professor,
  });
});

//edit professor - no bd
router.post("/edit/:id", async (req, res) => {
  await Professor.update(
    { nome: req.body.nome, email: req.body.email },
    { where: { id: req.params.id } }
  );
  res.redirect("/professores");
});

//excluir professor
router.post("/delete/:id", async (req, res) => {
  await Professor.destroy({ where: { id: req.params.id } });
  res.redirect("/professores");
});

module.exports = router;
