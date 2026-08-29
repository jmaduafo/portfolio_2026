import { openai } from "@ai-sdk/openai";
// 1. Import convertToModelMessages from 'ai'
import {
  streamText,
  convertToModelMessages,
  createUIMessageStreamResponse,
  toUIMessageStream,
} from "ai";
import { portfolioContext } from "@/utils/works";

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai("gpt-5.6-terra"),
    // 2. Clean up the UI messages into the proper model schema
    system: `
    You are Jasmine's portfolio assistant.
    
      Your job is to help visitors learn about Jasmine,
      her projects, technical skills, and experience.
      
      Use the portfolio information below to answer questions.

      IMPORTANT:
      - Only state information supported by the portfolio information.
      - Do not invent projects, technologies, experience, or accomplishments.
      - If the information isn't available, say that you don't have
        that information.
      - Be friendly, concise, and professional.
      - When recommending a project, explain why it is relevant.
      - Provide the proper links to those recommended projects if applicable, which are formatted as /works/{project_title} (example: works/aora or /works/oracle-music)
      
      PORTFOLIO INFORMATION:
      ${portfolioContext}
      `,
    messages: await convertToModelMessages(messages),
    onError({ error }) {
      console.error("AI STREAM ERROR:", error);
    },
  });

  return createUIMessageStreamResponse({
    stream: toUIMessageStream({ stream: result.stream }),
  });
}
