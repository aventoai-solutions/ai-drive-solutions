import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { MessageCircle, X, Mail, Sparkles } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent, MessageResponse } from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
  type PromptInputMessage,
} from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { site, whatsappLink } from "@/data/site";

const suggestions = [
  "What services do you offer?",
  "Can you automate my lead follow-up?",
  "How long does a website take?",
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const transport = useMemo(() => new DefaultChatTransport({ api: "/api/chat" }), []);
  const { messages, sendMessage, status, error } = useChat({ transport });

  const isBusy = status === "submitted" || status === "streaming";

  useEffect(() => {
    if (open) textareaRef.current?.focus();
  }, [open, messages.length, status]);

  const handleSubmit = (message: PromptInputMessage) => {
    const text = message.text.trim();
    if (!text || isBusy) return;
    void sendMessage({ text });
  };

  return (
    <>
      {open && (
        <div className="fixed inset-x-3 bottom-24 z-50 sm:inset-x-auto sm:right-6 sm:w-[380px]">
          <div className="glass flex max-h-[70vh] flex-col overflow-hidden rounded-3xl border border-border shadow-card">
            {/* header */}
            <div className="flex items-start justify-between gap-3 border-b border-border bg-foreground/[0.03] px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-xl bg-primary/15 text-primary-glow">
                  <Sparkles className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold text-foreground">Avento Assistant</p>
                  <p className="text-[11px] text-faint">AI support · replies instantly</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-foreground"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>

            {/* messages */}
            <Conversation className="min-h-[220px] flex-1">
              <ConversationContent className="gap-4 px-5 py-4">
                {messages.length === 0 && (
                  <div className="space-y-4">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Hi! I can answer questions about our AI automation, web development and
                      business systems work. What would you like to know?
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {suggestions.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => void sendMessage({ text: s })}
                          className="rounded-full border border-border bg-foreground/5 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {messages.map((message) => {
                  const text = message.parts
                    .map((part) => (part.type === "text" ? part.text : ""))
                    .join("");
                  return (
                    <Message key={message.id} from={message.role}>
                      <MessageContent>
                        {message.role === "assistant" ? (
                          <MessageResponse>{text}</MessageResponse>
                        ) : (
                          <span>{text}</span>
                        )}
                      </MessageContent>
                    </Message>
                  );
                })}

                {status === "submitted" && <Shimmer className="text-sm">Thinking...</Shimmer>}

                {error && (
                  <p className="text-xs text-destructive">
                    Something went wrong. Please try again or email{" "}
                    <a className="underline" href={`mailto:${site.email}`}>
                      {site.email}
                    </a>
                    .
                  </p>
                )}
              </ConversationContent>
              <ConversationScrollButton />
            </Conversation>

            {/* composer */}
            <div className="border-t border-border px-4 py-3">
              <PromptInput onSubmit={handleSubmit}>
                <PromptInputTextarea
                  ref={textareaRef}
                  placeholder="Ask about our services..."
                  disabled={isBusy}
                />
                <PromptInputFooter className="justify-end">
                  <PromptInputSubmit status={status} disabled={isBusy} />
                </PromptInputFooter>
              </PromptInput>
              <div className="mt-3 flex items-center justify-between gap-3 text-[11px] text-faint">
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-primary-glow"
                >
                  <Mail className="size-3.5" aria-hidden="true" /> {site.email}
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-whatsapp"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close AI assistant" : "Chat with our AI assistant"}
        aria-expanded={open}
        className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:size-16"
      >
        {open ? (
          <X className="size-6" aria-hidden="true" />
        ) : (
          <MessageCircle className="size-7" aria-hidden="true" />
        )}
      </button>
    </>
  );
}
