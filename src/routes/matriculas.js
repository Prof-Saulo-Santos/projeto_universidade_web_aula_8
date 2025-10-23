const express = require("express");
const controller = require("../controllers/matriculasController");

const router = express.Router();

router.get("/", controller.listar);
router.post("/", controller.criar);
router.put("/:id", controller.atualizar);
router.delete("/:id", controller.remover);

module.exports = router;
