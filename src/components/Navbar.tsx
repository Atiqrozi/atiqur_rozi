"use client";

import React, { useState, useEffect } from "react";

interface NavbarProps {
  onOpenAIChat: () => void;
}

export default function Navbar({ onOpenAIChat }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileActive, setMobileActive] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Read initial theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialTheme = savedTheme === "dark" || savedTheme === "light" ? savedTheme : systemTheme;
    setTheme(initialTheme as "light" | "dark");
  }, []);

  // Update theme class on HTML element when state updates
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Section highlighters
      const sections = ["home", "projects", "journey", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileActive(false);
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`navbar fixed left-[5%] right-[5%] height-[4.5rem] h-[4.5rem] rounded-[16px] border border-border z-[1000] transition-all duration-300 flex items-center ${
        scrolled
          ? "top-2 bg-bg-card shadow-lg"
          : "top-5 bg-bg-card/90 backdrop-blur-[14px] shadow-md"
      }`}
    >
      <div className="nav-container w-full max-w-[80rem] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, "home")}
          className="nav-logo flex items-center gap-2 font-headings text-[1.35rem] font-bold text-text transition-transform duration-200 hover:scale-[1.02]"
        >
          <span className="logo-dot w-[0.65rem] h-[0.65rem] bg-accent rounded-full shadow-[0_0_8px_var(--color-accent)]"></span>
          <span className="logo-text">Atiqur Rozi</span>
        </a>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileActive(!mobileActive)}
          className="nav-toggle md:hidden bg-transparent border-none text-text cursor-pointer focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {mobileActive ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </>
            )}
          </svg>
        </button>

        {/* Navigation links */}
        <ul
          className={`nav-links flex items-center gap-6 list-none transition-all duration-300 ${
            mobileActive
              ? "absolute top-[5rem] left-0 w-full bg-bg-card border-b border-border flex flex-col py-8 shadow-lg opacity-100 pointer-events-auto"
              : "md:flex hidden pointer-events-auto md:opacity-100"
          }`}
        >
          {["home", "projects", "journey", "about", "contact"].map((section) => (
            <li key={section} className="w-full text-center md:w-auto">
              <a
                href={`#${section}`}
                onClick={(e) => handleLinkClick(e, section)}
                className={`nav-link text-[0.95rem] font-medium text-text relative py-2 transition-colors duration-200 capitalize hover:text-primary ${
                  activeSection === section ? "text-primary after:w-full" : "after:w-0"
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:height-[2px] after:h-[2px] after:bg-primary after:transition-all after:duration-250`}
              >
                {section}
              </a>
            </li>
          ))}

          {/* Sun / Moon Theme Toggle */}
          <li className="w-full flex justify-center md:w-auto">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-border bg-white/10 dark:bg-zinc-800/10 text-text hover:bg-primary/8 hover:text-primary transition-all duration-200 cursor-pointer focus:outline-none"
              aria-label="Toggle Light/Dark Theme Mode"
            >
              {theme === "light" ? (
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
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
                </svg>
              )}
            </button>
          </li>

          {/* Ask AI Toggle */}
          <li className="w-full text-center md:w-auto">
            <button
              onClick={() => {
                setMobileActive(false);
                onOpenAIChat();
              }}
              className="btn-ai-toggle-nav inline-flex items-center gap-2 cursor-pointer bg-primary/8 text-primary border border-primary/20 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-primary hover:text-white hover:-translate-y-[1px] w-full justify-center md:w-auto focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2a10 10 0 0 1 7.54 16.59c-.24.25-.33.58-.25.92l1 4.58c.06.3-.22.56-.51.48l-4.58-1a1.2 1.2 0 0 0-.92.25A10 10 0 1 1 12 2z"></path>
                <path d="M12 8v8"></path>
                <path d="M8 12h8"></path>
              </svg>
              Ask AI
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
