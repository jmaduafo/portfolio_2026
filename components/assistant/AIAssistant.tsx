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
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "../ui/message-scroller";
import { Bubble, BubbleContent } from "../ui/bubble";
import { useChat } from "@ai-sdk/react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export const maxDuration = 30;

function AIAssistant() {
  const [input, setInput] = useState("");

  const { messages, setMessages, sendMessage, status } = useChat({});

  const loading = status === "streaming" || status === "submitted";

  const prompts = [
    "Which project shows Jasmine's strongest frontend skills?",
    "Which projects use Next.js?",
    "Which tools does Jasmine use?",
  ];
  
  
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    
    // 2. Dispatch text payload safely to the transport loop
    sendMessage({ text: input });
    setInput("");
  };

  const clearMessages = () => {
    setMessages([]);
  };
  
  const handlePrompt = (prompt: string, e: React.SubmitEvent<HTMLFormElement>) => {
    setInput(prompt);

    handleSubmit(e);
  }
  
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
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button
                      onClick={clearMessages}
                      disabled={!messages.length}
                      size={"icon"}
                      variant={"outline"}
                    >
                      <RotateCcw className="size-6" strokeWidth={1.5} />
                    </Button>
                  }
                />
                <TooltipContent side={"bottom"} className={"bg-background text-foreground"}>
                  <span className="tracking-wide">Refresh chat</span>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
          <div className="py-3 h-[45vh] overflow-auto">
            {messages.length ? (
              <MessageScrollerProvider>
                <MessageScroller className="">
                  <MessageScrollerViewport>
                    <MessageScrollerContent>
                      {messages.map((message, i) => (
                        <Bubble
                          key={`${message.id} ${i + 1}`}
                          align={message.role === "user" ? "end" : "start"}
                        >
                          {message.parts.map((part, index) => {
                            if (part.type === "text") {
                              return (
                                <BubbleContent key={index + 1}>
                                  {part.text}
                                </BubbleContent>
                              );
                            }

                            return null;
                          })}
                        </Bubble>
                      ))}
                    </MessageScrollerContent>
                  </MessageScrollerViewport>
                  <MessageScrollerButton />
                </MessageScroller>
              </MessageScrollerProvider>
            ) : (
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
                          type="submit"
                          onClick={() => {setInput(prompt)}}
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
            )}
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
