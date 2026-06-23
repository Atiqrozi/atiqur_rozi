"use client";

import React, { useState, useEffect, useRef } from "react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "assistant";
  isStreaming?: boolean;
}

interface AIChatProps {
  isOpen: boolean;
  onClose: () => void;
}

const aiResponses: Record<string, string> = {
  hello: "Hi there! I am Atiqur Rozi's AI Assistant. You can ask me about his project portfolio (like Batik Vision, CV Screening, and Lung AI), his programming languages, infrastructure background, or how to get in touch with him.",
  hi: "Hello! I am Atiqur's digital assistant. How can I help you learn more about his machine learning credentials today?",
  batik: "<strong>Batik Vision</strong> is a dual-model computer vision project. It uses <strong>MobileNetV2</strong> to classify Madura motif classes and a <strong>EfficientNet-B4</strong> to classify 5 classes of Indonesia motifs. It achieves an accuracy of 91.2% for classify madura motifs and 60.3% for classify 5 class of motif. Feel free to view details in the Projects section or open the Hugging Face space demo!",
  lung: "<strong>Lung Cancer Detection AI</strong> utilizes a dual-model framework: the first is an optimized <strong>XGBoost</strong> model trained on tabular clinical data, and the second is a deep learning model combining <strong>CLAHE image contrast enhancement</strong> with <strong>MobileNetV2</strong>, achieving an accuracy of <strong>98.5%</strong>. Model explainability is computed dynamically via <strong>SHAP explainability mapping</strong>.",
  cv: "The <strong>AI CV Screening Tool</strong> parses resumes (PDF/DOCX) using Spacy Named Entity Recognition (NER) to locate skills and experience. It then runs candidate embeddings against job requirements using a <strong>BERT transformer model</strong> to calculate cosine similarity match percentages.",
  skills: "Atiqur is skilled in:<br>• <strong>Languages</strong>: Python, C++, SQL<br>• <strong>ML Frameworks</strong>: PyTorch, TensorFlow, Scikit-Learn<br>• <strong>NLP & Vision</strong>: Hugging Face transformers, BERT, YOLOv8, OpenCV, Spacy, MobileNetV2, EfficientNet-B4 <br>• <strong>MLOps & Web</strong>: Docker, FastAPI, Flask, Hugging Face Spaces",
  contact: "You can contact Atiqur via email at <strong>atiqrozi14@gmail.com</strong> or by submitting the contact form on this page. You can also visit his GitHub and LinkedIn profiles via the footer links.",
  about: "Atiqur Rozi is an AI & Machine Learning Engineer who builds production-ready intelligent software. He works heavily on Deep Learning models, Natural Language processing pipelines, and MLOps deployment.",
  default: "That's an interesting question! While I'm simulated locally, I'd suggest checking out Atiqur's core competencies using the suggestion chips below, or contacting him directly via the contact form or email at <strong>atiqrozi14@gmail.com</strong>."
};

export default function AIChat({ isOpen, onClose }: AIChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial",
      text: "Hi, I am Atiqur's AI assistant. Ask me anything about his skills, experience, or projects like Batik Vision, CV Screening, and Lung AI!",
      sender: "assistant",
    },
  ]);

  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      if (inputRef.current) inputRef.current.focus();
      scrollToBottom();
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMessageSubmit = (text: string, key: string) => {
    // Add user bubble
    const userMsgId = Math.random().toString();
    setMessages((prev) => [...prev, { id: userMsgId, text, sender: "user" }]);

    // Trigger typing state
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);

      const rawAnswer = aiResponses[key] || aiResponses.default;
      const assistantMsgId = Math.random().toString();

      // Create a message placeholder with streaming state
      setMessages((prev) => [
        ...prev,
        { id: assistantMsgId, text: "", sender: "assistant", isStreaming: true }
      ]);

      streamText(rawAnswer, assistantMsgId);
    }, 1200);
  };

  const streamText = (htmlContent: string, messageId: string) => {
    const tokens = htmlContent.match(/<[^>]+>|[^<]+/g) || [htmlContent];
    let tokenIndex = 0;
    let accumulatedHtml = "";

    const runStream = () => {
      if (tokenIndex < tokens.length) {
        const token = tokens[tokenIndex];

        if (token.startsWith("<")) {
          // Direct injection of HTML tag
          accumulatedHtml += token;
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === messageId ? { ...msg, text: accumulatedHtml } : msg
            )
          );
          tokenIndex++;
          runStream(); // Skip direct to next character/token
        } else {
          // Stream plain text token character by character
          let charIndex = 0;
          const typeChar = () => {
            if (charIndex < token.length) {
              accumulatedHtml += token.charAt(charIndex);
              setMessages((prev) =>
                prev.map((msg) =>
                  msg.id === messageId ? { ...msg, text: accumulatedHtml } : msg
                )
              );
              charIndex++;
              setTimeout(typeChar, 8); // Fast typing speed
            } else {
              tokenIndex++;
              setTimeout(runStream, 15);
            }
          };
          typeChar();
        }
      } else {
        // Stream completed
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === messageId ? { ...msg, isStreaming: false } : msg
          )
        );
      }
    };

    runStream();
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = inputVal.trim();
    if (!query) return;

    let matchedKey = "default";
    const lowerQuery = query.toLowerCase();

    if (lowerQuery.includes("batik") || lowerQuery.includes("vision") || lowerQuery.includes("pattern")) {
      matchedKey = "batik";
    } else if (lowerQuery.includes("lung") || lowerQuery.includes("cancer")) {
      matchedKey = "lung";
    } else if (lowerQuery.includes("cv") || lowerQuery.includes("screening") || lowerQuery.includes("resume") || lowerQuery.includes("parser")) {
      matchedKey = "cv";
    } else if (lowerQuery.includes("skill") || lowerQuery.includes("language") || lowerQuery.includes("stack") || lowerQuery.includes("program")) {
      matchedKey = "skills";
    } else if (lowerQuery.includes("contact") || lowerQuery.includes("email") || lowerQuery.includes("reach") || lowerQuery.includes("hire")) {
      matchedKey = "contact";
    } else if (lowerQuery.includes("hello") || lowerQuery.includes("hi") || lowerQuery.includes("hey")) {
      matchedKey = "hello";
    } else if (lowerQuery.includes("about") || lowerQuery.includes("who") || lowerQuery.includes("engineer")) {
      matchedKey = "about";
    }

    handleMessageSubmit(query, matchedKey);
    setInputVal("");
  };

  const suggestionChips = [
    { label: "Tell me about Batik Vision", key: "batik" },
    { label: "How does Lung AI work?", key: "lung" },
    { label: "What is the CV Screening pipeline?", key: "cv" },
    { label: "Core technical skills", key: "skills" },
    { label: "Contact information", key: "contact" }
  ];

  return (
    <div
      className={`ai-chat-panel fixed bottom-24 right-8 w-96 max-w-[calc(100vw-4rem)] h-[32rem] max-h-[calc(100vh-9rem)] bg-white/85 dark:bg-zinc-950/85 backdrop-blur-[16px] border border-border shadow-xl rounded-[20px] z-[1500] flex flex-col overflow-hidden transition-all duration-300 ${isOpen
        ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
        : "opacity-0 translate-y-5 scale-[0.95] pointer-events-none"
        } max-sm:bottom-0 max-sm:right-0 max-sm:w-screen max-sm:h-screen max-sm:max-w-full max-sm:max-h-full max-sm:rounded-none`}
    >
      {/* Panel Header */}
      <div className="ai-chat-header p-4 px-6 border-b border-border bg-white/50 dark:bg-zinc-900/50 flex justify-between items-center">
        <div className="ai-status flex items-center gap-3">
          <span className="ai-avatar w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2a10 10 0 0 1 7.54 16.59c-.24.25-.33.58-.25.92l1 4.58c.06.3-.22.56-.51.48l-4.58-1a1.2 1.2 0 0 0-.92.25A10 10 0 1 1 12 2z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </span>
          <div>
            <h4 className="text-[0.95rem] font-bold text-text">Atiqur&apos;s AI Assistant</h4>
            <span className="status-indicator text-[0.75rem] text-accent font-medium flex items-center gap-1.5 after:content-[''] after:inline-block after:w-1.5 after:h-1.5 after:bg-accent after:rounded-full after:animate-pulse-status">
              Online
            </span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="ai-chat-close bg-transparent border-none text-text cursor-pointer opacity-60 transition-opacity duration-150 w-8 h-8 flex items-center justify-center rounded-full hover:opacity-100 hover:bg-primary/5"
          aria-label="Close AI Chat Panel"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Message Feed */}
      <div className="ai-chat-messages flex-grow p-6 overflow-y-auto flex flex-col gap-4 bg-primary/4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`msg-bubble max-w-[80%] p-3 px-4 rounded-[16px] text-[0.9rem] leading-relaxed animate-bubble-appear ${msg.sender === "user"
              ? "bg-primary text-white align-self-end self-end rounded-tr-[4px]"
              : "bg-white dark:bg-zinc-900 text-text border border-border align-self-start self-start rounded-tl-[4px]"
              }`}
          >
            <p dangerouslySetInnerHTML={{ __html: msg.text }}></p>
          </div>
        ))}

        {isTyping && (
          <div className="typing-bubble bg-white dark:bg-zinc-900 border border-border rounded-[16px] rounded-tl-[4px] p-3 px-5 flex items-center gap-1 self-start animate-bubble-appear">
            <span className="typing-dot w-1.5 h-1.5 rounded-full bg-primary-light animate-bounce"></span>
            <span className="typing-dot w-1.5 h-1.5 rounded-full bg-primary-light animate-bounce [animation-delay:0.2s]"></span>
            <span className="typing-dot w-1.5 h-1.5 rounded-full bg-primary-light animate-bounce [animation-delay:0.4s]"></span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggestion Chips */}
      <div className="ai-chat-suggestions p-3 px-6 bg-white/50 dark:bg-zinc-900/50 flex gap-2 overflow-x-auto border-t border-border scrollbar-none whitespace-nowrap shrink-0">
        {suggestionChips.map((chip) => (
          <button
            key={chip.key}
            onClick={() => handleMessageSubmit(chip.label, chip.key)}
            className="suggestion-chip bg-white dark:bg-zinc-900 border border-border px-3.5 py-1.5 rounded-full font-body text-[0.8rem] text-primary-dark dark:text-primary-light cursor-pointer flex-shrink-0 transition-all duration-150 hover:bg-primary/8 hover:border-primary-light"
          >
            {chip.label}
          </button>
        ))}
      </div>

      {/* Chat Form Area */}
      <form onSubmit={handleFormSubmit} className="ai-chat-input-area p-4 border-t border-border bg-white dark:bg-zinc-900 flex gap-3 items-center">
        <input
          type="text"
          ref={inputRef}
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="input chat-input flex-grow p-2.5 px-3.5 text-[0.9rem] border border-border rounded-lg bg-white/80 dark:bg-zinc-800/80 text-text placeholder-zinc-400 dark:placeholder-zinc-500 transition-all focus:border-primary focus:outline-none focus:bg-white dark:focus:bg-zinc-800"
          placeholder="Type a message..."
          aria-label="Type message to AI Assistant"
        />
        <button
          type="submit"
          className="chat-send-btn bg-primary text-white w-9 h-9 rounded-lg flex items-center justify-center border-none cursor-pointer transition-all duration-150 hover:bg-primary-dark hover:-translate-y-[1px]"
          aria-label="Send message to AI Assistant"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </form>
    </div>
  );
}
