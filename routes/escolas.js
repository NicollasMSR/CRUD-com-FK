const express = require('express');
const router = express.Router();
const { Escola } = require('../models');

//Listar categoria
router.get("/", async (req, res) => {
    const escolas = await Escola.findAll();
    res.render(
        "base", {
            title: "Listar Escolas",
            view: "escolas/show",
            escolas,
    });
});

//add nova categoria - formulário
router.get("/add", async (req, res) => {
    res.render(
        "base", {
            title: "Adicionar escola",
            view: "escolas/add",
    });
});

//add nova categoria - no bd
router.post("/add", async(req, res) =>{
    await Escola.create({nome: req.body.nome});
    res.redirect("/escolas")
});

//edit categoria - formulário
router.get("/edit/:id", async (req, res) => {
    const escola = await Escola.findByPk(req.params.id);
    res.render(
        "base", {
            title: "Editar Escola",
            view: "escola/edit",
            escola,
    });
});

//edit categoria - no bd
router.post("/edit/:id", async(req, res) =>{
    await Escola.update(
        {nome: req.body.nome},
        {where:{id: req.params.id}}
    );
    res.redirect("/cursos")
});

//excluir categoria
router.post("/delete/:id", async(req, res) =>{
    await Escola.destroy({where:{id: req.params.id}});
    res.redirect("/escolas")
});

module.exports = router;