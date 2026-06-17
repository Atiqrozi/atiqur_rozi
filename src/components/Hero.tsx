"use client";

import React, { useState, useEffect } from "react";

interface HeroProps {
  onOpenAIChat: () => void;
}

export default function Hero({ onOpenAIChat }: HeroProps) {
  const words = [
    "Computer Vision Systems",
    "Natural Language Processing",
    "Tabular Prediction Models",
    "MLOps Deployment Pipelines",
  ];

  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = words[wordIndex];

    const handleTyping = () => {
      if (isDeleting) {
        setTypedText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setTypedText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }

      let speed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentWord.length) {
        speed = 1500; // Pause at end of word
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        speed = 500; // Pause before starting next word
      }

      timer = setTimeout(handleTyping, speed);
    };

    timer = setTimeout(handleTyping, isDeleting && charIndex === currentWord.length ? 1500 : isDeleting && charIndex === 0 ? 500 : isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex]);

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("projects");
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="hero-section min-h-screen flex items-center pt-32 px-[5%] max-w-[80rem] mx-auto"
    >
      <div className="hero-content w-full max-w-[48rem] mx-auto text-center">
        {/* Available badge omitted as requested (commented out by user) */}

        <h1 className="hero-title text-4xl sm:text-[3.5rem] font-headings font-bold mb-1 tracking-tight">
          Hi, I am <span className="text-gradient bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Atiqur Rozi</span>
        </h1>

        <h2 className="hero-subtitle text-xl sm:text-[1.85rem] font-medium text-primary-dark mb-4">
          AI & Machine Learning Engineer
        </h2>

        {/* Looping typewriter focus pill */}
        <div className="typing-container inline-flex items-center gap-1 text-[1.25rem] font-semibold bg-white/50 dark:bg-zinc-900/50 border border-border dark:border-zinc-800 px-5 py-2 rounded-full w-fit mx-auto mb-6 shadow-sm">
          <span className="typing-label text-primary dark:text-zinc-100">Focus:</span>
          <span className="typing-text text-text">{typedText}</span>
          <span className="typing-cursor text-primary font-light animate-blink-cursor">|</span>
        </div>

        <p className="hero-desc text-[1.15rem] font-normal text-text-muted max-w-[38rem] mx-auto mb-12">
          Building and deploying production-grade intelligent systems. Combining advanced computer vision, state-of-the-art NLP, and reliable MLOps pipelines.
        </p>

        {/* Actions */}
        <div className="hero-actions flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-md mx-auto sm:max-w-none">
          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 cursor-pointer font-body font-medium bg-transparent text-primary border-2 border-primary py-2.5 px-6 rounded-lg transition-all duration-250 hover:bg-primary/8 hover:text-primary-dark hover:border-primary-dark dark:hover:text-primary-light dark:hover:border-primary-light hover:-translate-y-[2px]"
          >
            <span>Explore My Work</span>
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
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
          <button
            onClick={onOpenAIChat}
            className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 cursor-pointer font-body font-medium bg-accent text-white py-3 px-6 rounded-lg shadow-[0_4px_14px_rgba(34,197,94,0.4)] transition-all duration-250 hover:bg-accent-dark hover:-translate-y-[2px] hover:shadow-[0_6px_18px_rgba(21,128,61,0.5)] focus-visible:outline-3 focus-visible:outline-accent/40 focus-visible:outline-offset-2 border-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
              <line x1="9" y1="9" x2="9.01" y2="9"></line>
              <line x1="15" y1="9" x2="15.01" y2="9"></line>
            </svg>
            <span>Ask My AI Assistant</span>
          </button>
        </div>
      </div>
    </section>
  );
}
