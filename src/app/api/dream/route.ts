import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: "r8_QvzmadGdJebzOlOcSzluSF6h83mkID72qUVEc",
});

export async function POST(req: Request) {
    const { imageUrl, theme, room } = await req.json();
    

    const output = await replicate.run(
      "alaradirik/t2i-adapter-sdxl-depth-midas:8a89b0ab59a050244a751b6475d91041a8582ba33692ae6fab65e0c51b700328",
      {
        input: {
          image: imageUrl,
          prompt: `A photo of a ${theme} ${room}, 4k photo, highly detailed`,
        },
      }
    );


    return NextResponse.json(output);

}