"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ProjectModal from "@/components/ProjectModal";
import AIChat from "@/components/AIChat";

export default function Home() {
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const handleOpenAIChat = () => {
    setIsAIChatOpen(true);
  };

  const handleCloseAIChat = () => {
    setIsAIChatOpen(false);
  };

  const handleSelectProject = (id: string) => {
    setSelectedProjectId(id);
  };

  const handleCloseProjectModal = () => {
    setSelectedProjectId(null);
  };

  return (
    <>
      {/* Floating Navigation Bar */}
      <Navbar onOpenAIChat={handleOpenAIChat} />

      {/* Ambient Background Glows */}
      <div className="ambient-glow glow-1 fixed top-[-10vw] right-[-10vw] w-[50vw] h-[50vw] rounded-full filter blur-[130px] opacity-15 pointer-events-none z-[-1] animate-float-glow"></div>
      <div className="ambient-glow glow-2 fixed bottom-[-5vw] left-[-5vw] w-[45vw] h-[45vw] rounded-full filter blur-[130px] opacity-15 pointer-events-none z-[-1] animate-float-glow [animation-delay:-5s]"></div>

      {/* Main Core Content Sections */}
      <main>
        <Hero onOpenAIChat={handleOpenAIChat} />
        <Projects onSelectProject={handleSelectProject} />
        <Journey />
        <About />
        <Contact />
      </main>

      {/* Footer Segment */}
      <footer className="footer border-t border-border bg-white/40 py-8 px-[5%]">
        <div className="footer-container w-full max-w-[80rem] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="footer-left text-center md:text-left">
            <p className="footer-logo font-headings font-bold text-[1.15rem] text-text mb-1">
              Atiqur Rozi
            </p>
            <p className="footer-copy text-[0.85rem] text-text-muted">
              &copy; {new Date().getFullYear()} Atiqur Rozi. All rights reserved.
            </p>
          </div>
          <div className="footer-right">
            <div className="social-links flex gap-4">
              {/* Github */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="social-link w-9 h-9 rounded-full border border-border bg-white flex items-center justify-center text-text transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-[2px]"
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
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="social-link w-9 h-9 rounded-full border border-border bg-white flex items-center justify-center text-text transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-[2px]"
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
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              {/* Hugging Face (Custom vector) */}
              <a
                href="https://huggingface.co/atiqroz1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hugging Face Spaces"
                className="social-link w-9 h-9 rounded-full border border-border bg-white flex items-center justify-center text-text transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-[2px]"
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
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </a>
              {/* Email */}
              <a
                href="mailto:atiqrozi14@gmail.com"
                aria-label="Email Atiqur"
                className="social-link w-9 h-9 rounded-full border border-border bg-white flex items-center justify-center text-text transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-[2px]"
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
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Project Detail Modal Lightbox */}
      <ProjectModal
        isOpen={selectedProjectId !== null}
        projectId={selectedProjectId}
        onClose={handleCloseProjectModal}
      />

      {/* Floating AI Chat Assistant Panel */}
      <button
        onClick={handleOpenAIChat}
        className="floating-ai-trigger fixed bottom-8 right-8 w-14 h-14 rounded-full bg-primary text-white shadow-[0_4px_20px_rgba(79,70,229,0.4)] z-[1500] border-none cursor-pointer transition-all duration-200 hover:bg-primary-dark hover:scale-[1.05] flex items-center justify-center"
        aria-label="Open AI Assistant Chat"
      >
        <div className="trigger-glow absolute -inset-1 rounded-full bg-primary-light/30 z-[-1] animate-pulse-glow"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ai-trigger-icon"
        >
          <path d="M12 2a10 10 0 0 1 7.54 16.59c-.24.25-.33.58-.25.92l1 4.58c.06.3-.22.56-.51.48l-4.58-1a1.2 1.2 0 0 0-.92.25A10 10 0 1 1 12 2z"></path>
          <path d="M12 8v8"></path>
          <path d="M8 12h8"></path>
        </svg>
      </button>

      {/* AI Chat drawer overlay */}
      <AIChat isOpen={isAIChatOpen} onClose={handleCloseAIChat} />
    </>
  );
}
