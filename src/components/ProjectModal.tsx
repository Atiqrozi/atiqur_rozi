"use client";

import React, { useEffect } from "react";
import Image from "next/image";

interface Metric {
  name: string;
  val: string;
}

interface ProjectData {
  title: string;
  category: string;
  image: string;
  tags: string[];
  description: React.ReactNode;
  metrics: Metric[];
  repo: string;
  live: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  projectId: string | null;
  onClose: () => void;
}

const projectDetailsData: Record<string, ProjectData> = {
  "batik-vision": {
    title: "Batik Vision Classification & Detection",
    category: "Computer Vision",
    image: "/batik vision.png",
    tags: ["TensorFlow", "YOLOv8", "EfficientNet-B4", "MobileNetV2", "OpenCV", "FastAPI"],
    description: (
      <>
        <p className="mb-4">Batik Vision is a state-of-the-art computer vision application designed to automate the classification and motif identification of traditional Indonesian Batik textiles.</p>
        <p className="mb-4">The system utilizes a dual-model architecture: a fine-tuned EfficientNet-B4 network is deployed for multi-label classification to identify the overall Batik category (e.g. Megamendung, Parang, Kawung), while a YOLOv8 object detection model identifies localized sub-patterns and structural symbols on the fabric in real-time.</p>
        <p>By mapping and archiving these unique pattern coordinates, this application aids cultural repositories, designers, and manufacturers in authenticating fabrics, preserving cultural heritage, and verifying design lineages.</p>
      </>
    ),
    metrics: [
      { name: "Model Accuracy", val: "91.2%" },
      { name: "Inference Speed", val: "32ms / image" },
      { name: "Dataset size", val: "600 motifs" }
    ],
    repo: "https://github.com/atiqurrozi/batik-vision",
    live: "https://www.batikvision.site/"
  },
  "cv-screening": {
    title: "AI CV Screening & Parser Pipeline",
    category: "Natural Language Processing (NLP)",
    image: "/cv screening.png",
    tags: ["Hugging Face", "BERT Embeddings", "Spacy NER", "FastAPI", "Docker"],
    description: (
      <>
        <p className="mb-4">An intelligent applicant tracking helper designed to automate resume parsing and role suitability estimation for technical organizations.</p>
        <p className="mb-4">The system runs a pipeline that extracts text from multiple formats (PDF, DOCX, TXT), utilizes a custom Spacy Named Entity Recognition (NER) model to identify candidate skills, years of experience, and credentials, and maps these entities against targeted job descriptions.</p>
        <p>A BERT transformer embedding encoder compiles candidate vectors and measures cosine similarity ratios against the role specifications. It returns a ranked leaderboard alongside text summaries highlighting matching strengths and missing prerequisites, eliminating manual filtration biases.</p>
      </>
    ),
    metrics: [
      { name: "NER Skill Extraction F1", val: "91.8%" },
      { name: "Match Ranking Accuracy", val: "88.5%" },
      { name: "Average Parser Speed", val: "1.2s / resume" },
      { name: "Format Compatibility", val: "PDF" }
    ],
    repo: "https://github.com/atiqurrozi/ai-cv-screening",
    live: "https://frontend-cvscreening.vercel.app/"
  },
  "lung-ai": {
    title: "Lung Cancer Diagnostic Indicator AI",
    category: "Machine Learning",
    image: "/lung ai.png",
    tags: ["Scikit-Learn", "XGBoost", "MobileNetV2", "CLAHE", "Pandas", "Flask"],
    description: (
      <>
        <p className="mb-4">Lung Cancer Detection AI is a clinical decision-support model designed to evaluate patient risk levels based on multi-source demographic, habits, and clinical indicators.</p>
        <p className="mb-4">Built using an optimized XGBoost classifier trained on comprehensive clinical patient databases, the model maps variables like age, smoking index, respiratory issues, chronic symptoms, and chest pain parameters to output an early screening risk categorization (Cancer or Non-Cancer).</p>
        <p>To ensure high transparency required in medical diagnostics, SHAP (SHapley Additive exPlanations) values are generated dynamically to display the specific feature contributions driving each patient's risk report. This model has been fully wrapped and deployed on Hugging Face Spaces for medical practitioner testing.</p>
      </>
    ),
    metrics: [
      { name: "Accuracy Score", val: "95,4%" },
      { name: "Model Sensitivity (Recall)", val: "100%" },
      { name: "Model Precision", val: "91.6%" },
      { name: "Risk Categorizations", val: "2 Levels" }
    ],
    repo: "https://github.com/atiqurrozi/lung-cancer-detection",
    live: "https://lungai-pi.vercel.app/"
  }
};

export default function ProjectModal({ isOpen, projectId, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !projectId) return null;

  const data = projectDetailsData[projectId];
  if (!data) return null;

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="modal-overlay fixed inset-0 w-full h-full bg-slate-900/50 backdrop-blur-md z-[2000] flex items-center justify-center p-4 transition-opacity duration-300"
    >
      <div className="modal bg-white dark:bg-zinc-900 border border-border shadow-xl max-w-[50rem] w-full max-h-[85vh] overflow-y-auto relative p-8 animate-scale-up">
        {/* Close button */}
        <button
          onClick={onClose}
          className="modal-close-btn absolute top-6 right-6 bg-primary/8 border-none rounded-full w-10 h-10 flex items-center justify-center text-text cursor-pointer z-10 transition-all duration-200 hover:bg-primary/15 hover:text-primary-dark dark:hover:text-primary-light"
          aria-label="Close Project Modal"
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
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Modal Content */}
        <div className="modal-body">
          <div className="modal-project-header mb-8 pb-4 border-b-2 border-border">
            <span className="modal-project-category text-[0.8rem] text-primary uppercase font-semibold tracking-wider">
              {data.category}
            </span>
            <h3 className="modal-project-title text-[2rem] font-bold text-text my-1 leading-tight">
              {data.title}
            </h3>
            <div className="modal-project-tags flex flex-wrap gap-2 mt-4">
              {data.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-bg border border-border text-text text-[0.8rem] font-medium px-2.5 py-1 rounded-[6px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative aspect-[16/9] w-full mb-6 rounded-xl overflow-hidden shadow-md">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="modal-project-img object-cover"
            />
          </div>

          <div className="modal-project-grid grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
            <div className="modal-col-left">
              <h4 className="text-[1.15rem] font-bold mb-3 border-l-3 border-primary pl-2">
                Overview &amp; Architecture
              </h4>
              <div className="text-text/90 text-[0.95rem] leading-relaxed">
                {data.description}
              </div>
            </div>
            <div className="modal-col-right flex flex-col gap-6">
              <div>
                <h4 className="text-[1.15rem] font-bold mb-3 border-l-3 border-primary pl-2">
                  Performance Metrics
                </h4>
                <div className="metrics-card bg-bg border border-border rounded-xl p-4">
                  {data.metrics.map((metric) => (
                    <div
                      key={metric.name}
                      className="metric-row flex justify-between items-center py-2 border-b border-primary/8 last:border-b-0"
                    >
                      <span className="metric-name text-[0.85rem] text-text-muted">
                        {metric.name}
                      </span>
                      <span className="metric-val text-[0.95rem] font-bold text-text">
                        {metric.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-actions flex flex-col gap-2.5">
                <a
                  href={data.live}
                  target="_blank"
                  rel="noopener"
                  className="btn-primary w-full inline-flex items-center justify-center gap-2 cursor-pointer bg-accent text-white py-3 rounded-lg shadow-[0_4px_14px_rgba(34,197,94,0.4)] transition-all duration-200 hover:bg-accent-dark hover:-translate-y-[1px]"
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
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  <span>Live Space Demo</span>
                </a>
                <a
                  href={data.repo}
                  target="_blank"
                  rel="noopener"
                  className="btn-secondary w-full inline-flex items-center justify-center gap-2 cursor-pointer bg-transparent text-primary border-2 border-primary py-2 rounded-lg transition-all duration-200 hover:bg-primary/8 hover:text-primary-dark"
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
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span>View Source Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
