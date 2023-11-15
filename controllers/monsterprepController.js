const mongoose = require("mongoose");
const MonsterPrep = require("../models/monsterprepModels");

const getMonsterPreps = async (req, res) => {
  const preps = await MonsterPrep.find({}).sort({ createdAt: -1 });

  if (!preps) {
    res.status(404).json({ error: "No preparation made" });
  }

  res.status(200).json(preps);
};

const getMonsterPrep = async (req, res) => {
  const { prepId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(prepId)) {
    res.status(404).json({ error: "No such Monster Preparation exist" });
  }

  const prep = await MonsterPrep.findById(prepId);

  if (!prep) {
    res.status(400).json({ error: "No such Monster Preparation exist" });
  }

  res.status(200).json(prep);
};

const createMonsterPrep = async (req, res) => {
  try {
    const prep = await MonsterPrep.create(req.body);
    res.status(200).json(prep);
  } catch (err) {
    console.log(err);
    res.status(404).json({ error: "Missing field" });
  }
};

const updateMonsterPrep = async (req, res) => {
  try {
    const {prepId} = req.params;
    const monster = await MonsterPrep.findByIdAndUpdate(prepId, req.body);
    if(!monster) {
      res.status(404);
      throw new Error(`cannot findd any monster with ID ${prepId}`);
    }
    const updateMonster = await MonsterPrep.findById(prepId);
    res.status(200).json(updateMonster)

  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};

const deleteMonsterPrep = async (req, res) => {
  try {
    const {prepId} = req.params;
    const monster = await MonsterPrep.findByIdAndDelete(prepId);
    if(!monster) {
      res.status(404);
      throw new Error(`cannot find any monster with ID ${prepId}`);
    }
    res.status(200).json(monster);

  } catch (error) {
    res.status(500);
    throw new Error(error.message)
  }
};

module.exports = {
  getMonsterPreps,
  getMonsterPrep,
  createMonsterPrep,
  updateMonsterPrep,
  deleteMonsterPrep,
};
