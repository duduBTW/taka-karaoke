import mongoose, { Model, model } from "mongoose";
import { IMusica } from "types/musica";
import { musicaSchema } from "./musica";

//@ts-ignore
mongoose.models = {};

export const MusicaModel: Model<IMusica> = model("Musica", musicaSchema);

export const connectDB = (handler: any) => async (req: any, res: any) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  // Use new db connection
  if (process.env.MOONGOSE_CONNECTION)
    await mongoose.connect(process.env.MOONGOSE_CONNECTION);

  return handler(req, res);
};
