import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { getPlaiceholder } from "plaiceholder";

async function createPlaceholders(images: any[]) {
  const res = [];
  for (const image of images) {
    const buffer = await fetch(image.previewURL).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    );
    const { base64 } = await getPlaiceholder(buffer);
    res.push({ ...image, base64 });
  }
  return res;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { q, p } = req.body;
    const query = encodeURI(q);
    const page = encodeURI(p);
    try {
      // https://pixabay.com/api/docs/
      const pixabayRes = await axios.get(
        `https://pixabay.com/api/?key=${
          process.env.API_KEY
        }&image_type=photo&per_page=12&q=${query}${page ? `&page=${page}` : ""}`
      );

      const images = await createPlaceholders(pixabayRes.data.hits);

      return res.status(200).json({ images, total: pixabayRes.data.total });
    } catch (error: any) {
      if (error.response) {
        return res.status(500).json({
          error: `Server responded with a status code not equals to 2xx. ${error.response.data} ${error.response.status} ${error.response.headers}`,
        });
      } else if (error.request) {
        return res.status(500).json({
          error: `The request was made but no response was received ${error.request}`,
        });
      } else {
        return res.status(500).json({ error: `Error ${error.message}` });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "request failed" });
  }
}
