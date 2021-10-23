import { NextApiRequest, NextApiResponse } from "next";
import { MusicaModel, connectDB } from "models";
import getVideoId from "get-video-id";
import { youtube } from "googleapis/build/src/apis/youtube";

// types
import { IMusica } from "types/musica";

async function buscarMusicas(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const musicas: IMusica[] = await MusicaModel.find();

      return res.status(200).send(musicas);
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: JSON.stringify(err) });
    }
  } else if (req.method === "POST") {
    const { id: videoId } = getVideoId(req.body.url);

    if (!videoId) return res.status(200).send(null);

    const resultApiY = await youtube("v3").videos.list({
      part: ["snippet"],
      key: process.env.YOUTUBE_KEY,
      maxResults: 50,
      id: [videoId],
    });

    if (!resultApiY.data.items) return res.status(200).send(null);

    const novaMusica = new MusicaModel({
      dateRequest: new Date(),
      id: videoId,
      thumbnail: resultApiY.data.items[0].snippet?.thumbnails?.["high"]?.url,
      titulo: resultApiY.data.items[0].snippet?.title,
      url: req.body.url,
    });

    const musicaCreated = await novaMusica.save();

    return res.status(200).send(musicaCreated);
  } else if (req.method === "PUT") {
    try {
      return res.status(200).send(
        await MusicaModel.updateMany(
          {
            id: req.body.id,
          },
          { $set: { jaCantado: true } }
        )
      );
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: JSON.stringify(err) });
    }
  }
}

export default connectDB(buscarMusicas);
