"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    const key = id.replace("contact-", "");
    setFormData((prev) => ({ ...prev, [key]: value }));

    // Reset error on input if valid
    if (errors[key as keyof typeof errors]) {
      let isValid = value.trim().length > 0;
      if (key === "email") {
        isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
      }
      if (isValid) {
        setErrors((prev) => ({ ...prev, [key]: false }));
      }
    }
  };

  const validate = () => {
    const newErrors = {
      name: formData.name.trim().length === 0,
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()),
      subject: formData.subject.trim().length === 0,
      message: formData.message.trim().length === 0,
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((isError) => isError);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      setSending(true);

      // Simulate API submission (1.5 seconds delay)
      setTimeout(() => {
        setSending(false);
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 1500);
    }
  };

  return (
    <section id="contact" className="contact-section max-w-[80rem] mx-auto py-16 px-[5%]">
      <div className="section-header mb-12 text-center">
        <span className="section-tag inline-block text-[0.75rem] tracking-[0.15em] uppercase text-primary font-semibold mb-1 px-3 py-1 bg-primary/8 rounded-full">
          Collaboration
        </span>
        <h2 className="section-title text-4xl mb-4 font-bold text-text">
          Get In Touch
        </h2>
        <div className="section-divider w-14 h-[3px] bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
      </div>
      <div className="contact-container max-w-[42rem] mx-auto">
        <div className="contact-card relative bg-bg-card backdrop-blur-md border border-border shadow-lg rounded-[20px] p-8 md:p-12 overflow-hidden">
          {/* Social Media Links */}
          <div className="social-links-container mb-8 pb-8 border-b border-border/60">
            <p className="text-center text-[0.8rem] font-bold text-text-muted/80 mb-4 uppercase tracking-[0.1em]">
              Find Me On
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/atiqur-rozi-28a84a258/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3 rounded-xl border border-border bg-white/40 dark:bg-zinc-900/40 transition-all duration-300 hover:bg-white dark:hover:bg-zinc-800 hover:border-primary hover:shadow-md hover:-translate-y-[2px] group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white shrink-0">
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
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[0.85rem] font-bold text-text group-hover:text-primary transition-colors duration-200">LinkedIn</span>
                  <span className="text-[0.75rem] text-text-muted truncate">atiqur-rozi-28a84a258</span>
                </div>
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/Atiqrozi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3 rounded-xl border border-border bg-white/40 dark:bg-zinc-900/40 transition-all duration-300 hover:bg-white dark:hover:bg-zinc-800 hover:border-primary hover:shadow-md hover:-translate-y-[2px] group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white shrink-0">
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
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[0.85rem] font-bold text-text group-hover:text-primary transition-colors duration-200">GitHub</span>
                  <span className="text-[0.75rem] text-text-muted truncate">Atiqrozi</span>
                </div>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/rob.yft/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3 rounded-xl border border-border bg-white/40 dark:bg-zinc-900/40 transition-all duration-300 hover:bg-white dark:hover:bg-zinc-800 hover:border-primary hover:shadow-md hover:-translate-y-[2px] group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white shrink-0">
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
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[0.85rem] font-bold text-text group-hover:text-primary transition-colors duration-200">Instagram</span>
                  <span className="text-[0.75rem] text-text-muted truncate">rob.yft</span>
                </div>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group mb-6 flex flex-col relative">
                <label htmlFor="contact-name" className="text-[0.85rem] font-semibold mb-1 text-text">
                  Your Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`input p-3 border rounded-lg bg-white/80 dark:bg-zinc-900/60 font-body text-[0.95rem] text-text placeholder-zinc-400 dark:placeholder-zinc-500 transition-all duration-200 focus:border-primary focus:outline-none focus:bg-white dark:focus:bg-zinc-800 focus:shadow-[0_0_0_3px_rgba(79,70,229,0.15)] ${errors.name ? "border-red-500 shadow-[0_0_0_3px_rgba(239,68,68,0.15)]" : "border-border"
                    }`}
                  placeholder="e.g. John Doe"
                  required
                />
                {errors.name && (
                  <span className="form-error-msg text-red-500 text-[0.75rem] mt-1 font-medium block">
                    Name is required
                  </span>
                )}
              </div>

              <div className="form-group mb-6 flex flex-col relative">
                <label htmlFor="contact-email" className="text-[0.85rem] font-semibold mb-1 text-text">
                  Email Address
                </label>
                <input
                  type="email"
                  id="contact-email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`input p-3 border rounded-lg bg-white/80 dark:bg-zinc-900/60 font-body text-[0.95rem] text-text placeholder-zinc-400 dark:placeholder-zinc-500 transition-all duration-200 focus:border-primary focus:outline-none focus:bg-white dark:focus:bg-zinc-800 focus:shadow-[0_0_0_3px_rgba(79,70,229,0.15)] ${errors.email ? "border-red-500 shadow-[0_0_0_3px_rgba(239,68,68,0.15)]" : "border-border"
                    }`}
                  placeholder="e.g. john@example.com"
                  required
                />
                {errors.email && (
                  <span className="form-error-msg text-red-500 text-[0.75rem] mt-1 font-medium block">
                    Please enter a valid email address
                  </span>
                )}
              </div>
            </div>

            <div className="form-group mb-6 flex flex-col relative">
              <label htmlFor="contact-subject" className="text-[0.85rem] font-semibold mb-1 text-text">
                Subject
              </label>
              <input
                type="text"
                id="contact-subject"
                value={formData.subject}
                onChange={handleChange}
                className={`input p-3 border rounded-lg bg-white/80 dark:bg-zinc-900/60 font-body text-[0.95rem] text-text placeholder-zinc-400 dark:placeholder-zinc-500 transition-all duration-200 focus:border-primary focus:outline-none focus:bg-white dark:focus:bg-zinc-800 focus:shadow-[0_0_0_3px_rgba(79,70,229,0.15)] ${errors.subject ? "border-red-500 shadow-[0_0_0_3px_rgba(239,68,68,0.15)]" : "border-border"
                  }`}
                placeholder="e.g. Project Consultation"
                required
              />
              {errors.subject && (
                <span className="form-error-msg text-red-500 text-[0.75rem] mt-1 font-medium block">
                  Subject is required
                </span>
              )}
            </div>

            <div className="form-group mb-6 flex flex-col relative">
              <label htmlFor="contact-message" className="text-[0.85rem] font-semibold mb-1 text-text">
                Message
              </label>
              <textarea
                id="contact-message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`input p-3 border rounded-lg bg-white/80 dark:bg-zinc-900/60 font-body text-[0.95rem] text-text placeholder-zinc-400 dark:placeholder-zinc-500 resize-y transition-all duration-200 focus:border-primary focus:outline-none focus:bg-white dark:focus:bg-zinc-800 focus:shadow-[0_0_0_3px_rgba(79,70,229,0.15)] ${errors.message ? "border-red-500 shadow-[0_0_0_3px_rgba(239,68,68,0.15)]" : "border-border"
                  }`}
                placeholder="Let's build something intelligent..."
                required
              ></textarea>
              {errors.message && (
                <span className="form-error-msg text-red-500 text-[0.75rem] mt-1 font-medium block">
                  Message cannot be empty
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={sending}
              className="btn-primary w-full p-3.5 mt-2 inline-flex items-center justify-center gap-2 cursor-pointer bg-accent text-white border-none rounded-lg shadow-[0_4px_14px_rgba(34,197,94,0.4)] transition-all duration-250 hover:bg-accent-dark hover:scale-[1.01] hover:shadow-[0_6px_18px_rgba(21,128,61,0.5)] focus:outline-none disabled:opacity-75 disabled:cursor-not-allowed"
            >
              <span className="btn-text">{sending ? "Sending..." : "Send Message"}</span>
              {!sending && (
                <svg
                  className="send-icon ml-0.5"
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
              )}
            </button>
          </form>

          {/* Form Success Overlay */}
          <div
            className={`form-success-overlay absolute inset-0 w-full h-full bg-white dark:bg-zinc-900 z-10 flex items-center justify-center p-8 text-center transition-opacity duration-300 ${success ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
          >
            <div className="success-content max-w-[24rem]">
              <div className="success-ring w-18 h-18 rounded-full border-4 border-accent text-accent flex items-center justify-center mx-auto mb-6 animate-scale-up">
                <svg
                  className="success-check"
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-text">
                Message Sent Successfully!
              </h3>
              <p className="text-text-muted mb-8 text-[0.95rem]">
                Thank you for reaching out. Atiqur will get back to you shortly.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="btn-secondary inline-flex items-center justify-center gap-2 cursor-pointer border-2 border-primary text-primary px-6 py-2.5 rounded-lg transition-all duration-200 hover:bg-primary/8"
              >
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
