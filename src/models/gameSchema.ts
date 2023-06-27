import { Schema, model } from "mongoose";

const gameModelSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    developers: {
      type: [String],
      required: true,
    },
    cover: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Game = model("Game", gameModelSchema);
export default Game;
