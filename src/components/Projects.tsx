"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  category: string;
  categories: string[];
  image: string;
  shortDesc: string;
  tech: string[];
}

interface ProjectsProps {
  onSelectProject: (id: string) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [filter, setFilter] = useState("all");
  const [fade, setFade] = useState(false);

  const projects: Project[] = [
    {
      id: "batik-vision",
      title: "Batik Vision",
      category: "Computer Vision",
      categories: ["cv", "ml"],
      image: "/batik vision.png",
      shortDesc: "Advanced deep learning classifier and pattern detection system identifying complex traditional Indonesian Batik motifs.",
      tech: ["TensorFlow", "MobileNetV2", "OpenCV"],
    },
    {
      id: "cv-screening",
      title: "AI CV Screening",
      category: "NLP & Transformers",
      categories: ["nlp", "ml"],
      image: "/cv screening.png",
      shortDesc: "Intelligent applicant screening and resume parser utilizing NLP Transformers to evaluate candidate fit ratios against job roles.",
      tech: ["Hugging Face", "BERT", "Spacy", "FastAPI"],
    },
    {
      id: "lung-ai",
      title: "Lung Cancer Detection AI",
      category: "Machine Learning",
      categories: ["ml"],
      image: "/lung ai.png",
      shortDesc: "High-accuracy tabular predictor analyzing clinical features, demographics, and risk factors to detect early-stage lung cancer indicators.",
      tech: ["Scikit-Learn", "XGBoost", "Pandas", "Hugging Face Spaces", "CLAHE"],
    },
  ];

  const handleFilterChange = (newFilter: string) => {
    setFade(true);
    setTimeout(() => {
      setFilter(newFilter);
      setFade(false);
    }, 200);
  };

  const filteredProjects = projects.filter(
    (p) => filter === "all" || p.categories.includes(filter)
  );

  return (
    <section id="projects" className="projects-section max-w-[80rem] mx-auto py-16 px-[5%]">
      <div className="section-header mb-12 text-center">
        <span className="section-tag inline-block text-[0.75rem] tracking-[0.15em] uppercase text-primary font-semibold mb-1 px-3 py-1 bg-primary/8 rounded-full">
          Portfolio
        </span>
        <h2 className="section-title text-4xl mb-4 font-bold text-text">
          Selected AI & ML Projects
        </h2>
        <div className="section-divider w-14 h-[3px] bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
      </div>

      {/* Filter tabs */}
      <div className="filter-tabs flex justify-center gap-2 mb-12 flex-wrap">
        {[
          { label: "All Projects", val: "all" },
          { label: "Computer Vision", val: "cv" },
          { label: "NLP", val: "nlp" },
          { label: "Machine Learning", val: "ml" },
        ].map((tab) => (
          <button
            key={tab.val}
            onClick={() => handleFilterChange(tab.val)}
            className={`filter-tab border border-border px-5 py-2 rounded-full font-body font-medium text-text cursor-pointer transition-all duration-200 hover:border-primary-light hover:bg-primary/4 ${filter === tab.val
              ? "bg-primary text-white border-primary shadow-[0_4px_10px_rgba(79,70,229,0.2)]"
              : "bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-100 border-zinc-200 dark:border-zinc-600"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div
        className={`projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${fade ? "opacity-30" : "opacity-100"
          }`}
      >
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project.id)}
            className="project-card flex flex-col bg-bg-card backdrop-blur-md rounded-[16px] overflow-hidden border border-border shadow-md cursor-pointer transition-all duration-250 hover:-translate-y-1 hover:shadow-lg hover:border-primary-light"
          >
            <div className="project-image-wrapper relative aspect-[16/10] overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} Project Image`}
                width={600}
                height={375}
                priority={project.id === "batik-vision"}
                className="project-image w-full h-full object-cover transition-transform duration-350 hover:scale-105"
              />
              <div className="project-overlay absolute top-0 left-0 w-full h-full bg-indigo-950/40 backdrop-blur-[4px] flex items-center justify-center opacity-0 transition-opacity duration-250 hover:opacity-100">
                <span className="btn-overlay bg-white text-primary px-5 py-2.5 text-[0.85rem] rounded-lg shadow-md font-medium">
                  View Specifications
                </span>
              </div>
            </div>
            <div className="project-info p-6 flex-grow flex flex-col">
              <span className="project-tag-badge text-[0.75rem] font-semibold text-primary uppercase mb-1 tracking-wider">
                {project.category}
              </span>
              <h3 className="project-title-card text-[1.35rem] font-bold mb-2 text-text">
                {project.title}
              </h3>
              <p className="project-description-card text-[0.95rem] text-text/80 mb-6 flex-grow">
                {project.shortDesc}
              </p>
              <div className="project-tech-stack flex flex-wrap gap-1">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-primary/8 border border-primary/12 text-primary-dark text-[0.75rem] font-medium px-2 py-0.5 rounded"
                  >
                    {t}
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
