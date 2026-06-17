"use client";

import React from "react";
import Image from "next/image";

export default function About() {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: ["Python", "C++", "SQL", "PyTorch", "TensorFlow", "Scikit-Learn"],
    },
    {
      title: "NLP & Vision",
      skills: ["Hugging Face", "BERT", "OpenCV", "MobileNetV2"],
    },
    {
      title: "Infrastructure & MLOps",
      skills: ["Docker", "Git", "FastAPI / Flask", "Hugging Face Spaces"],
    },
  ];

  return (
    <section id="about" className="about-section max-w-[80rem] mx-auto py-16 px-[5%]">
      <div className="section-header mb-12 text-center">
        <span className="section-tag inline-block text-[0.75rem] tracking-[0.15em] uppercase text-primary font-semibold mb-1 px-3 py-1 bg-primary/8 rounded-full">
          Biography
        </span>
        <h2 className="section-title text-4xl mb-4 font-bold text-text">
          About Me
        </h2>
        <div className="section-divider w-14 h-[3px] bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
      </div>

      <div className="about-grid grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-[4rem] items-start">
        {/* Profile Image Column */}
        <div className="about-profile-col lg:sticky lg:top-[6.5rem] flex justify-center">
          <div className="profile-image-container relative aspect-square w-full max-w-[24rem] rounded-[24px]">
            {/* Ambient Background Gradient Shadow */}
            <div className="profile-image-glow absolute -inset-2 bg-gradient-to-tr from-primary to-accent rounded-[28px] opacity-45 blur-[8px] z-0"></div>

            {/* Image */}
            <div className="relative w-full h-full rounded-[24px] overflow-hidden border-4 border-white dark:border-zinc-800 shadow-lg z-10">
              <Image
                src="/profil diri.png"
                alt="Atiqur Rozi Portrait"
                fill
                priority
                className="profile-image object-cover"
              />
            </div>
          </div>
        </div>

        {/* Text Content Column */}
        <div className="about-info-col">
          <h3 className="about-headline text-[1.75rem] font-bold mb-6 text-text leading-tight">
            Solving Real-World Problems Through Artificial Intelligence
          </h3>
          <p className="about-text text-[1.05rem] text-text/80 mb-6">
            I am a passionate AI & Machine Learning Engineer committed to building, optimizing, and deploying production-grade systems. My core strength lies in combining foundational mathematical algorithms with modern software engineering and MLOps principles.
          </p>
          <p className="about-text text-[1.05rem] text-text/80 mb-6">
            Whether it&apos;s parsing complex semantics in natural language, tracking patterns in computer vision, or building predictive models on large-scale tabular data, I aim for scalable, resource-efficient, and highly accurate results.
          </p>

          {/* Competency Badges List */}
          <div className="skills-block mt-12 bg-bg-card border border-border rounded-[16px] p-6">
            <h4 className="skills-title text-[1.15rem] font-bold mb-4 pb-1 border-b-2 border-border text-text">
              Core Competencies
            </h4>
            <div className="skills-categories flex flex-col gap-6">
              {skillCategories.map((cat) => (
                <div key={cat.title} className="skill-cat">
                  <h5 className="text-[0.9rem] font-bold text-primary-dark mb-2 uppercase tracking-wider">
                    {cat.title}
                  </h5>
                  <div className="skill-tags flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-600 text-zinc-700 dark:text-zinc-100 text-[0.85rem] font-medium px-3.5 py-1.5 rounded-lg transition-all duration-150 hover:border-primary hover:shadow-sm hover:-translate-y-[1px]"                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
