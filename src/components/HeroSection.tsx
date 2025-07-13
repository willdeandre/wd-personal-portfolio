'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, ExternalLink, ChevronDown } from 'lucide-react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  const featuredProjects = [
    {
      title: "ProspectVision+ 2025",
      description: "Interactive NBA draft dashboard with advanced stats simplified for player comparison",
      tech: ["R Shiny", "Basketball Analytics", "Data Visualization"],
      url: "https://willdeandre.shinyapps.io/2025draft",
    },
    {
      title: "InstaCourt",
      description: "Intuitive game tracker with real-time advanced stats and interactive shot charts",
      tech: ["HTML/CSS/JS", "Sports Analytics", "Real-time Tracking"],
      url: "https://instacourt-nkgbte2fd-wills-projects-d4e5eaf1.vercel.app"
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#E5F4E3] text-[#003F91] overflow-hidden ml-0 mr-42">
      {/* Add custom CSS for diagonal hover effect */}
      <style jsx>{`
        .diagonal-hover:hover {
          background-image: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 8px,
            rgba(255,255,255,0.1) 8px,
            rgba(255,255,255,0.1) 10px
          );
          background-color: rgb(55, 65, 81) !important;
          transition: all 0.3s ease !important;
          opacity: 1 !important;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto pl-8 pr-12 text-center">
          <div className={`transition-all duration-1500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-7xl lg:text-9xl font-geist mb-8 leading-none">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#003F91] via-[#5DA9E9] to-[#6D326D]">
                Will
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#6D326D] via-[#5DA9E9] to-[#003F91] -mt-4">
                DeAndre
              </span>
            </h1>

            <p className="text-4xl text-primary mb-8 max-w-3xl mx-auto font-bold">
              Basketball Strategist: Analytics and CBA
            </p>

            <div className="flex justify-center gap-6 mb-16 mt-20">
              <a href="/projects" className="group relative overflow-hidden bg-gray-700 !text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl diagonal-hover">
                <span className="relative z-10 flex items-center gap-2">
                  Explore My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <div className="flex gap-4">
                <a href="https://linkedin.com/in/willdeandre" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden bg-gray-700 text-white p-4 rounded-full font-semibold transition-all duration-300 hover:scale-110 hover:shadow-xl diagonal-hover">
                  <span className="relative z-10">
                    <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </span>
                </a>
                <a href="mailto:willdeandre@gmail.com" className="group relative overflow-hidden bg-gray-700 text-white p-4 rounded-full font-semibold transition-all duration-300 hover:scale-110 hover:shadow-xl diagonal-hover">
                  <span className="relative z-10">
                    <Mail className="w-6 h-6 text-white" />
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-[#003F91]/50" />
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="relative py-32 bg-[#E5F4E3]">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-4 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003F91] to-[#5DA9E9]">
              Featured Work
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white border-2 border-black"
              >
                <div className="aspect-video bg-gradient-to-br from-[#5DA9E9]/10 to-[#6D326D]/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white" />
                  <div className="absolute inset-6 flex flex-col justify-end pb-4">
                    <h3 className="text-2xl font-bold mb-2 text-[#003F91]">{project.title}</h3>
                    <p className="text-[#003F91]/70 mb-4">{project.description}</p>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative overflow-hidden bg-gray-700 !text-white px-4 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl diagonal-hover inline-flex items-center gap-2 self-center"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        View Project
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a href="/projects" className="group relative overflow-hidden bg-gray-700 !text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl diagonal-hover">
              <span className="relative z-10">
                View All Projects
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-32 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white">
              Let&apos;s Connect!
            </span>
          </h2>
          <p className="text-white text-center mb-12 text-lg max-w-2xl mx-auto">
            Ready to discuss basketball analytics, CBA insights, or potential collaborations? I&apos;d love to hear from you.
          </p>

          <div className="flex justify-center gap-6">
            <a href="mailto:willdeandre@gmail.com" className="group relative overflow-hidden bg-gray-700 !text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl diagonal-hover">
              <span className="relative z-10 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email Me
              </span>
            </a>

            <a href="https://linkedin.com/in/willdeandre" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden bg-gray-700 !text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl diagonal-hover">
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}