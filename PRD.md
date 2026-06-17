# Product Requirements Document (PRD): Atiqur Rozi Portfolio

## 1. Goal & Objectives
Atiqur Rozi is an AI/ML Engineer and Data Scientist. The objective of this project is to build a premium, high-converting, and visually stunning interactive portfolio website that showcases his expertise, project gallery, professional philosophy, and offers an AI-Native interactive experience.

---

## 2. Design System Guidelines (ui-ux-pro-max)
This project strictly follows the design decisions persisted in [MASTER.md](file:///d:/kegabutaan/Portofolio/Atiqur%20Rozi/design-system/atiqur-rozi-portfolio/MASTER.md).

*   **Theme / Style**: AI-Native UI (minimalist chrome, ambient lighting, smooth reveal effects, streaming text animations, typing indicators).
*   **Color Palette**:
    *   `--color-primary`: `#4F46E5` (Indigo-600)
    *   `--color-secondary`: `#818CF8` (Indigo-400)
    *   `--color-accent` / `--color-cta`: `#22C55E` (Green-500)
    *   `--color-bg`: `#EEF2FF` (Very light indigo/blue-gray)
    *   `--color-text`: `#312E81` (Deep dark indigo for high contrast)
*   **Typography**:
    *   Heading Font: Archivo (creative, clean, modern)
    *   Body Font: Space Grotesk (minimal, tech-oriented)
*   **Accessibility**: Focus outlines visible, minimum 4.5:1 text contrast, responsive viewport scaling, readable body sizes (16px+).
*   **Anti-Patterns (STRICTLY FORBIDDEN)**:
    *   ❌ No emoji icons (use SVG icons exclusively from Heroicons/Lucide).
    *   ❌ No missing `cursor-pointer` on clickable buttons/cards.
    *   ❌ No layout shifts on hover.
    *   ❌ No instant state changes (use transitions of 150-300ms).

---

## 3. Product Features & Sections

### A. Navigation Bar (Floating & Dynamic)
*   A premium floating navigation bar that blends into the background using a glassmorphic blur.
*   Auto-hiding/shrinking on scroll, showing smooth indicator lines under active sections.
*   Contains links to Home, Projects, About, and Contact, plus a toggle for an interactive AI Chat panel.

### B. Hero Section (AI-Native Welcome)
*   High-impact typography showcasing Atiqur's name and role: **"Atiqur Rozi — AI & Machine Learning Engineer"**.
*   A live-typing or streaming text subtitle that loops through core strengths (e.g., "Building intelligent systems.", "Optimizing deep learning models.", "Designing MLOps pipelines.").
*   A secondary CTA button that scrolls to projects, and a primary CTA that scrolls to contact or starts the AI chat.
*   Visual background accent: Ambient glow or subtle moving gradient or canvas particles representing artificial neural networks.

### C. Project Showcase Grid (Masonry / Flex)
*   A visual-first, filterable grid highlighting his major works:
    1.  **Batik Vision** (Computer Vision, Batik pattern classification)
    2.  **CV Screening** (Natural Language Processing, resume parsing and job description matching)
    3.  **Lung AI** (Tabular lung cancer detection model)
*   **Category Filter tabs**: "All", "Computer Vision", "NLP", "Machine Learning".
*   **Project Cards**:
    *   Uses high-quality thumbnail images located in the `public/` directory:
        *   `batik vision.png`
        *   `cv screening.png`
        *   `lung ai.png`
    *   Hover effect: Smooth overlay transition revealing metadata (technologies, key metrics like accuracy or F1 score), and showing a "View Details" button.
*   **Interactive Lightbox / Modal**:
    *   Triggered when clicking a project card.
    *   Displays full project overview, technical architecture diagram (via SVG/CSS), details of models used (e.g. YOLO, BERT, Random Forest), metrics, key challenges solved, and repository links.
    *   Closes on background click, escape key, or Close button.

### D. About & Philosophy Section
*   Two-column premium layout:
    *   Left column: Profile picture featuring `public/profil diri.png` inside a styled frame with custom ambient glow.
    *   Right column: Bio detailing Atiqur's experience, MLOps stack, and technical philosophy ("Bridging advanced research and production-grade software").
*   Skill badges with custom styling matching the primary/secondary theme.

### E. AI Chat Assistant (Ambient Floating Panel)
*   An interactive chat interface representing the "AI-Native UI" style.
*   Allows visitors to ask questions about Atiqur Rozi (e.g. "What models did he use for Batik Vision?", "Tell me about his MLOps experience.", "What is his contact info?").
*   Includes predefined question suggestions (quick chips) to make it easy for users to get started.
*   Simulates real-time streaming text (character-by-character printing) and a 3-dot typing pulse indicator for a highly realistic assistant feel.
*   All responses are predefined in a structured JS dictionary to ensure reliability and speed without external API costs.

### F. Contact Section & Footer
*   A modern contact form with input validation, floating labels, focus ring indicators, and a submit button that transitions into a checkmark or success state upon completion.
*   Social links (GitHub, LinkedIn, Email, Hugging Face Space) with verified official SVG logos.

---

## 4. Non-Functional Requirements
*   **Fast Loading**: Minimized assets, optimized SVG icons, no heavy third-party framework runtime unless requested.
*   **SEO Optimization**: Unique meta titles, structured headings (one H1), semantic layout tags, and alt text for all assets.
*   **Cross-Device Responsiveness**: Fully tested on mobile (375px), tablet (768px), and desktop (1024px, 1440px).
