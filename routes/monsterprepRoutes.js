const express = require("express");
const {
  getMonsterPreps,
  getMonsterPrep,
  createMonsterPrep,
  updateMonsterPrep,
  deleteMonsterPrep,
} = require("../controllers/monsterprepController");

const router = express.Router();

router.get("/", getMonsterPreps);

router.get("/:prepId", getMonsterPrep);

router.post("/", createMonsterPrep);

router.patch("/:prepId", updateMonsterPrep);

router.delete("/:prepId", deleteMonsterPrep);

module.exports = router;
