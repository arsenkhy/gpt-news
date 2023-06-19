import { NextResponse } from "next/server";
import { Configuration, CreateChatCompletionResponse, OpenAIApi } from "openai";
import { AxiosResponse } from "axios";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST(request: Request) {
  try {
    // Check if the required key matches the expected value
    const requestKey = request.headers.get('requestKey');
    if (!requestKey) {
        return NextResponse.json({ error: 'Required header is missing' }, { status: 400 });
    }

    if (requestKey !== process.env.APP_KEY) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

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
            content: `Write this summary html tags. Include headers, and text, but no images.`,
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
