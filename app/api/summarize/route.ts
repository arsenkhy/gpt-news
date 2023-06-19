import { NextResponse } from "next/server";
import { Configuration, CreateChatCompletionResponse, OpenAIApi } from "openai";
import { AxiosResponse } from "axios";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST(request: Request) {
  try {
    // Check if the parameters are missing
    const { content } = await request.json();
    if (!content) {
      return NextResponse.json({ error: 'Content parameter is required' }, { status: 400 });
    }

    // @ts-ignore
    const aiResponse: AxiosResponse<CreateChatCompletionResponse, any> =
      await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `${content} Tl;dr`,
          },
          {
            role: "system",
            content: `Write this summary html tags. Include headers, and text, but no images. Don't use <h1> tags, only <h2> and <h3>`,
          },
        ],
      });

    return NextResponse.json(
      {
        content: aiResponse.data.choices[0].message?.content,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("request error", error);
    NextResponse.json({ error: "error updating post" }, { status: 500 });
  }
}
