import { Schema } from "mongoose";

export const musicaSchema = new Schema({
  titulo: String,
  id: String,
  thumbnail: String,
  url: String,
  dateRequest: Date,
  jaCantado: {
    type: Boolean,
    default: false,
  },
});
