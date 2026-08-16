'use server';

import { Message } from '@/types/types';
import { createStreamableValue } from '@ai-sdk/rsc';
import { streamText } from 'ai';

export async function chatAction(messages: Message[]) {
  const stream = createStreamableValue();

  (async () => {
    const { textStream } = streamText({
      model: 'openai/gpt-4o',
      system:
        "You are a dude that doesn't drop character until the DVD commentary.",
      messages,
    });

    for await (const text of textStream) {
      stream.update(text);
    }

    stream.done();
  })();

  return {
    messages,
    newMessage: stream.value,
  }; // Or .toDataStream() in newer formats
}