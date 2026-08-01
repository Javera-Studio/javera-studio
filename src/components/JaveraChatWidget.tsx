"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const GREETING: ChatMessage = {
  role: "assistant",
  content:
    "Hallo! Schön, dass du da bist. Ich bin die digitale Assistentin von Javera Studio und beantworte dir gerne Fragen zu unseren Leistungen und Preisen. Wie kann ich dir helfen?",
};

const LINK_PATTERN = /(https?:\/\/[^\s]+|[\w.+-]+@[\w-]+\.[a-z]{2,})/gi;

function renderMessageContent(content: string) {
  const parts = content.split(LINK_PATTERN);

  return parts.map((part, index) => {
    if (!part) return null;

    if (/^https?:\/\//i.test(part)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-mauve"
        >
          {part}
        </a>
      );
    }

    if (/^[\w.+-]+@[\w-]+\.[a-z]{2,}$/i.test(part)) {
      return (
        <a key={index} href={`mailto:${part}`} className="underline underline-offset-2 hover:text-mauve">
          {part}
        </a>
      );
    }

    return <span key={index}>{part}</span>;
  });
}

export function JaveraChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  async function sendMessage() {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: trimmed }];
    setMessages(nextMessages);
    setInput("");
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!response.ok) {
        throw new Error("Request fehlgeschlagen");
      }

      const data = await response.json();
      setMessages([...nextMessages, { role: "assistant", content: data.reply }]);
    } catch {
      setError("Entschuldigung, gerade gibt es ein Problem mit dem Chat. Magst du es kurz später nochmal versuchen?");
    } finally {
      setIsLoading(false);
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      {isOpen && (
        <div
          style={{ bottom: "calc(5.5rem + var(--cookie-banner-h, 0px))" }}
          className="fixed inset-x-0 z-50 mx-auto flex h-[520px] w-full flex-col overflow-hidden border border-border bg-cream shadow-2xl sm:inset-x-auto sm:right-6 sm:w-[90vw] sm:max-w-sm sm:rounded-2xl"
        >
          <div className="flex items-center justify-between border-b border-border bg-ink px-5 py-4">
            <span className="font-serif text-lg text-cream">Javera Studio</span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Chat schließen"
              className="text-cream/70 transition-colors hover:text-cream"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "bg-mauve text-white"
                      : "bg-white text-ink shadow-sm"
                  }`}
                >
                  {renderMessageContent(message.content)}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-2xl bg-white px-4 py-2.5 text-sm text-muted-foreground shadow-sm">
                  schreibt …
                </div>
              </div>
            )}

            {error && (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl bg-white px-4 py-2.5 text-sm text-muted-foreground shadow-sm">
                  {error}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="flex items-center gap-2 border-t border-border bg-white px-3 py-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Deine Frage …"
              disabled={isLoading}
              className="flex-1 rounded-full border border-border bg-cream px-4 py-2 text-sm text-ink outline-none focus:border-mauve"
            />
            <button
              type="button"
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              aria-label="Nachricht senden"
              className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-mauve text-white transition-opacity hover:opacity-90 disabled:opacity-40"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Chat schließen" : "Chat öffnen"}
        style={{ bottom: "calc(1.5rem + var(--cookie-banner-h, 0px))" }}
        className="fixed right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-cream shadow-xl transition-transform hover:scale-105"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </>
  );
}
