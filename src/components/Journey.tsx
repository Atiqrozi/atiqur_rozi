"use client";

import React from "react";

interface Milestone {
  id: string;
  title: string;
  subtitle: string;
  subtitleColorClass: string;
  period: string;
  description: React.ReactNode;
  dotColorClass: string;
  tags: {
    label: string;
    theme: "primary" | "accent" | "blue";
  }[];
}

export default function Journey() {
  const milestones: Milestone[] = [
    {
      id: "backend-intern",
      title: "Backend Developer Intern",
      subtitle: "PT. Anugerah Prima Manunggal",
      subtitleColorClass: "text-primary dark:text-primary-light",
      period: "2024",
      dotColorClass: "bg-primary border-bg",
      description: (
        <>
          Built a Warehouse Management System using Express.js, MongoDB Atlas, and JWT authentication —
          handling inventory tracking, role-based access control, and RESTful API design for internal logistics
          operations.
        </>
      ),
      tags: [
        { label: "Express.js", theme: "primary" },
        { label: "MongoDB Atlas", theme: "primary" },
        { label: "JWT Auth", theme: "primary" },
        { label: "REST API", theme: "primary" },
      ],
    },
    {
      id: "bangkit",
      title: "Machine Learning Path",
      subtitle: "Bangkit Academy 2024 — Google, Tokopedia, Gojek, Traveloka",
      subtitleColorClass: "text-accent-dark dark:text-accent-light",
      period: "2024",
      dotColorClass: "bg-accent border-bg",
      description: (
        <>
          Intensive ML program by Google and leading Indonesian tech companies. Covered TensorFlow, deep
          learning, NLP, and MLOps. Capstone: built a <strong>waste detection model from scratch</strong> achieving
          91% accuracy, deployed to a mobile application for real-time garbage classification.
        </>
      ),
      tags: [
        { label: "TensorFlow", theme: "accent" },
        { label: "Computer Vision", theme: "accent" },
        { label: "Mobile Deployment", theme: "accent" },
        { label: "91% Accuracy", theme: "accent" },
      ],
    },
    {
      id: "university",
      title: "S.Kom — Teknik Informatika",
      subtitle: "UPN Veteran Jawa Timur",
      subtitleColorClass: "text-blue-600 dark:text-blue-400",
      period: "2022 – 2026",
      dotColorClass: "bg-blue-500 border-bg",
      description: (
        <>
          Graduated with GPA 3.92 / 4.00. Thesis: lung CT-scan classification using MobileNetV2 with four
          contrast enhancement methods (HE, CLAHE, Gamma Correction, Contrast Stretching). Best result achieved
          with <strong>Histogram Equalization at 99% accuracy</strong>.
        </>
      ),
      tags: [
        { label: "GPA 3.92 / 4.00", theme: "blue" },
        { label: "MobileNetV2", theme: "blue" },
        { label: "HE · CLAHE · CS · GC", theme: "blue" },
        { label: "Best: HE 99% Accuracy", theme: "accent" },
      ],
    },
  ];

  const getTagStyles = (theme: "primary" | "accent" | "blue") => {
    switch (theme) {
      case "accent":
        return "bg-accent/8 border-accent/15 text-accent-dark dark:text-accent-light hover:bg-accent/12";
      case "blue":
        return "bg-blue-500/8 border-blue-500/15 text-blue-700 dark:text-blue-300 hover:bg-blue-500/12";
      case "primary":
      default:
        return "bg-primary/8 border-primary/15 text-primary-dark dark:text-primary-light hover:bg-primary/12";
    }
  };

  return (
    <section id="journey" className="journey-section max-w-[80rem] mx-auto py-16 px-[5%] scroll-mt-20">
      <div className="section-header mb-12 text-center">
        <span className="section-tag inline-block text-[0.75rem] tracking-[0.15em] uppercase text-primary font-semibold mb-1 px-3 py-1 bg-primary/8 rounded-full">
          Journey
        </span>
        <h2 className="section-title text-4xl mb-4 font-bold text-text">
          My Professional Journey
        </h2>
        <div className="section-divider w-14 h-[3px] bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
      </div>

      <div className="relative border-l border-border/80 dark:border-border/40 ml-4 md:ml-8 pl-8 md:pl-12 py-2 space-y-10">
        {milestones.map((item) => (
          <div key={item.id} className="relative group transition-all duration-300">
            {/* Timeline Dot */}
            <span
              className={`absolute -left-[41px] md:-left-[57px] top-6 w-4.5 h-4.5 rounded-full border-[3.5px] border-bg dark:border-bg z-10 shadow-sm flex items-center justify-center transition-transform duration-250 group-hover:scale-110 ${item.dotColorClass}`}
            />

            {/* Timeline Card */}
            <div className="bg-bg-card backdrop-blur-md border border-border/60 dark:border-border/30 rounded-[20px] p-6 md:p-8 shadow-sm transition-all duration-250 hover:shadow-md hover:border-primary-light/40 hover:-translate-y-0.5">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-[1.2rem] md:text-[1.3rem] font-bold text-text leading-snug">
                    {item.title}
                  </h3>
                  <p className={`text-[0.95rem] font-medium mt-1 ${item.subtitleColorClass}`}>
                    {item.subtitle}
                  </p>
                </div>
                <span className="text-[0.8rem] font-bold text-text/80 shrink-0 bg-primary/5 dark:bg-primary/10 border border-border/30 px-3 py-1 rounded-full text-center">
                  {item.period}
                </span>
              </div>

              <p className="text-[0.95rem] text-text/85 leading-relaxed font-body">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2.5 mt-5">
                {item.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`border text-[0.75rem] font-semibold px-3 py-1.5 rounded-full cursor-default transition-colors duration-150 ${getTagStyles(
                      tag.theme
                    )}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
