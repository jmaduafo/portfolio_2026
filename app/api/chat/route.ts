import { openai } from "@ai-sdk/openai";
// 1. Import convertToModelMessages from 'ai'
import { 
  streamText, 
  convertToModelMessages, 
  createUIMessageStreamResponse, 
  toUIMessageStream 
} from "ai";

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai("gpt-5.6-terra"),
    // 2. Clean up the UI messages into the proper model schema
    messages: await convertToModelMessages(messages),
    onError({ error }) {
      console.error("AI STREAM ERROR:", error);
    },
  });

  return createUIMessageStreamResponse({
    stream: toUIMessageStream({ stream: result.stream }),
  });
}