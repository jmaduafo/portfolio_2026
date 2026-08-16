"use client";

import { RotateCcw, SendHorizonal, Sparkles } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Header5 from "../headings/Header5";
import Paragraph from "../headings/Paragraph";
import TextareaAutosize from "react-textarea-autosize";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "../ui/empty";
import { cn } from "@/lib/utils";
import { chatAction } from "@/lib/actions";
import { Message } from "@/types/types";
import { readStreamableValue } from "@ai-sdk/rsc";

function AIAssistant() {
  const [input, setInput] = useState("");
  const [conversation, setConversation] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const prompts = [
    "Which project shows Jasmine's strongest frontend skills?",
    "Which projects use Next.js?",
    "Which tools does Jasmine use?",
  ];

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input.length) {
      return;
    }

    setLoading(true);

    try {
      const { messages, newMessage } = await chatAction([
        ...conversation,
        { role: "user", content: input },
      ]);

      let textContent = "";

      for await (const delta of readStreamableValue(newMessage)) {
        textContent = `${textContent}${delta}`;

        setConversation([
          ...messages,
          { role: "assistant", content: textContent },
        ]);

        setInput("");
      }
    } catch (err: any) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  console.log(conversation);

  return (
    <div className="">
      <Popover>
        <PopoverTrigger
          render={
            <Button>
              <Sparkles />
              AI Assistant
            </Button>
          }
        />
        <PopoverContent className="w-xl">
          {/* HEADING */}
          <div className="border-b border-b-background/20 py-3 flex justify-between items-start gap-4">
            <div className="flex flex-col">
              <Header5 text="AI Assistant" className="font-sans-medium" />
              <Paragraph text="How should I help you today?" />
            </div>
            <div>
              <Button size={"icon"} variant={"outline"}>
                <RotateCcw className="size-6" strokeWidth={1.5} />
              </Button>
            </div>
          </div>
          <div className="py-3">
            <Empty className="w-full">
              <EmptyHeader>
                <EmptyTitle>Want to chat?</EmptyTitle>
                <EmptyDescription className="text-background">
                  Hi! I&apos;m Jasmine's portfolio assistant. What would you
                  like to explore?
                </EmptyDescription>
              </EmptyHeader>
              <EmptyContent className="flex flex-col gap-2 w-full">
                <Paragraph
                  text="Suggested prompts"
                  className="font-sans-medium"
                />
                <div className="w-full flex items-center justify-center flex-wrap gap-2 text-sm">
                  {prompts.map((prompt) => {
                    return (
                      <button
                        key={prompt}
                        type="button"
                        onClick={() => setInput(prompt)}
                        className={cn(
                          "py-1 px-2 border border-background text-background rounded-full hover:bg-background hover:text-foreground",
                        )}
                      >
                        {prompt}
                      </button>
                    );
                  })}
                </div>
              </EmptyContent>
            </Empty>
          </div>
          <form
            onSubmit={handleSubmit}
            className="p-2 border border-background/50 bg-background/20 rounded-xl"
          >
            <TextareaAutosize
              minRows={1}
              maxRows={6}
              disabled={loading}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full border-none outline-none text-base resize-none"
              placeholder="Type here..."
            />
            <div className="flex justify-end">
              <Button
                disabled={loading}
                type="submit"
                variant={"secondary"}
                size={"icon-sm"}
              >
                <SendHorizonal />
              </Button>
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default AIAssistant;
