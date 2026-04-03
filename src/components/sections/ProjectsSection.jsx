import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Deep Horizon Platform",
    location: "Gulf of Mexico",
    type: "Offshore Exploration",
    year: "2024",
    stat: "180,000 bbl/d",
  },
  {
    title: "Al-Qamar Pipeline",
    location: "Arabian Peninsula",
    type: "Pipeline Infrastructure",
    year: "2023",
    stat: "2,400 mi",
  },
  {
    title: "Nordic LNG Terminal",
    location: "Norwegian Sea",
    type: "LNG Processing",
    year: "2025",
    stat: "12 MTPA",
  },
];

function ProjectCard({ project, image, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container with scan effect */}
      <div className="relative overflow-hidden aspect-[4/3] bg-muted">
        <img
          src={image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Scan line effect */}
        {isHovered && (
          <div
            className="absolute left-0 right-0 h-0.5 bg-cyan z-10 pointer-events-none"
            style={{
              animation: "scanLine 1.5s ease-in-out infinite",
              boxShadow: "0 0 15px 3px rgba(0,229,255,0.4)",
            }}
          />
        )}

        {/* Overlay on hover */}
        <div
          className={`absolute inset-0 bg-obsidian/60 backdrop-blur-[2px] transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Hover content */}
        <div
          className={`absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="font-heading font-black text-3xl md:text-4xl text-cyan">{project.stat}</span>
          <span className="font-mono text-[10px] text-steel tracking-widest uppercase mt-1">
            {project.type}
          </span>
        </div>

        {/* Corner brackets */}
        <div className="absolute top-3 left-3 w-4 h-4 border-l border-t border-cyan/40 pointer-events-none" />
        <div className="absolute top-3 right-3 w-4 h-4 border-r border-t border-cyan/40 pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-l border-b border-cyan/40 pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-r border-b border-cyan/40 pointer-events-none" />
      </div>

      {/* Info bar */}
      <div className="flex items-center justify-between mt-4 md:mt-6">
        <div>
          <h3 className="font-heading font-bold text-lg md:text-xl text-foreground tracking-tight">
            {project.title}
          </h3>
          <p className="font-mono text-[11px] text-steel tracking-wide mt-1">
            {project.location}
          </p>
        </div>
        <span className="font-mono text-[10px] text-muted-foreground">{project.year}</span>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection({ images }) {
  return (
    <section id="projects" className="relative bg-obsidian py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <span className="font-mono text-[10px] text-amber tracking-[0.3em] uppercase">
            02 // Global Projects
          </span>
          <h2 className="font-heading font-black text-4xl md:text-7xl text-foreground tracking-tighter mt-4 leading-[0.9]">
            Monumental<br />Infrastructure
          </h2>
          <div className="w-16 h-px bg-amber mt-6" />
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              image={images[i]}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}