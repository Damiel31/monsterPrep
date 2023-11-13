const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const monsterprepSchema = new Schema({
  monsterName: {
    type: String,
    required: true,
  },
  monsterWeakness: {
    type: String,
    required: true,
  },
  weapon: {
    type: String,
    required: true,
  },
  rewardGoals: [
    {
      itemName: {
        type: String,
        required: true,
      },
      itemQuantity: {
        type: Number,
        default: 1,
      },
    },
  ],
  inventory: [
    {
      itemName: {
        type: String,
        required: true,
      },
      itemQuantity: {
        type: Number,
        default: 1,
      },
    },
  ],
});

module.exports = mongoose.model("MonsterPrep", monsterprepSchema);
