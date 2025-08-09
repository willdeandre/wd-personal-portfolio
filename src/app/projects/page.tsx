"use client";

import { ArrowRight } from "lucide-react";

export default function Projects() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F0FFF0' }}>
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
          transition: background-image 0.3s ease !important;
          opacity: 1 !important;
        }
      `}</style>
      <div className="max-w-2xl mx-auto py-8 px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-800 mb-3">
            Projects
          </h1>
          <div className="w-16 h-0.5 bg-gray-400 mx-auto"></div>
        </div>

        {/* Projects Container */}
        <div className="space-y-16">
          {/* NBA Cap Sheets */}
          <div className="bg-white rounded-xl shadow-sm border-2 border-primary overflow-hidden">
            <div className="px-8 py-6 border-b border-gray-50">
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-2xl font-medium text-gray-800">
                  2026 Salary Cap Sheets
                </h2>
                <a
                  href="/DeAndreCapSheets2026.xlsx"
                  download
                  className="group relative overflow-hidden bg-gray-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl diagonal-hover"
                >
                  <span className="relative z-10 flex items-center gap-2 text-white">
                    Download
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Cap sheets! This is a work in progress, but I wanted to make this Excel spreadsheet public in case people want to download and customize their own cap sheets. It currently features multi-year salary numbers, an auto-populating depth chart, a formula to quickly show users where a team is in relation to the cap, and hard cap information. Exceptions and picks will be the next thing I add!
              </p>
            </div>
            <div className="px-8 pt-0 pb-8">
              <a
                href="/DeAndreCapSheets2026.xlsx"
                download
                className="relative w-full rounded-lg overflow-hidden shadow-sm block cursor-pointer"
              >
                <img
                  src="/capthumbnail.png"
                  alt="Cap Sheet Thumbnail"
                  className="w-full h-auto"
                />
              </a>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-3 py-1 text-sm font-medium text-yellow-700 bg-yellow-50 rounded-full border border-yellow-100">
                  Excel
                </span>
                <span className="px-3 py-1 text-sm font-medium text-green-700 bg-green-50 rounded-full border border-green-100">
                  Data Scraping
                </span>
                <span className="px-3 py-1 text-sm font-medium text-purple-700 bg-purple-50 rounded-full border border-purple-100">
                  CBA Rules
                </span>
                <span className="px-3 py-1 text-sm font-medium text-blue-700 bg-blue-50 rounded-full border border-blue-100">
                  Interactive Tools
                </span>
              </div>
            </div>
          </div>
          {/* NBA Draft Visualizer */}
          <div className="bg-white rounded-xl shadow-sm border-2 border-primary overflow-hidden">
            <div className="px-8 py-6 border-b border-gray-50">
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-2xl font-medium text-gray-800">
                  ProspectVision+ 2025
                </h2>
                <a
                  href="https://willdeandre.shinyapps.io/2025draft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-gray-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl diagonal-hover"
                >
                  <span className="relative z-10 flex items-center gap-2 text-white">
                    Try Me
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </div>
              <p className="text-gray-600 leading-relaxed">
                ProspectVision+ turns advanced stats into clear, interactive visuals that can be used to quickly analyze an entire draft class. The app uses skill groupings to create twelve intuitive performance indicators to evaluate college players. With side-by-side comparisons available based on archetype and position, finding the best prospects for your favorite team has never been easier.
              </p>
            </div>
            <div className="px-8 pt-0 pb-8">
              <a
                href="https://willdeandre.shinyapps.io/2025draft"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full rounded-lg overflow-hidden shadow-sm block cursor-pointer"
              >
                <img
                  src="/draftvizthumbnail.png"
                  alt="NBA Draft Visualizer Interface Preview"
                  className="w-full h-auto"
                />
              </a>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-3 py-1 text-sm font-medium text-red-700 bg-red-50 rounded-full border border-red-100">
                  R Shiny
                </span>
                <span className="px-3 py-1 text-sm font-medium text-green-700 bg-green-50 rounded-full border border-green-100">
                  Draft Analysis
                </span>
                <span className="px-3 py-1 text-sm font-medium text-blue-700 bg-blue-50 rounded-full border border-blue-100">
                  Data Visualization
                </span>
                <span className="px-3 py-1 text-sm font-medium text-purple-700 bg-purple-50 rounded-full border border-purple-100">
                  Advanced Analytics
                </span>
                <span className="px-3 py-1 text-sm font-medium text-orange-700 bg-orange-50 rounded-full border border-orange-100">
                  Interactive Dashboard
                </span>
              </div>
            </div>
          </div>

          {/* Basketball Shot Tracker */}
          <div className="bg-white rounded-xl shadow-sm border-2 border-primary overflow-hidden">
            <div className="px-8 py-6 border-b border-gray-50">
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-2xl font-medium text-gray-800">
                  InstaCourt
                </h2>
                <a
                  href="https://instacourt-live.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-gray-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl diagonal-hover"
                >
                  <span className="relative z-10 flex items-center gap-2 text-white">
                    Try Me
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </div>
              <p className="text-gray-600 leading-relaxed">
                InstaCourt is an intuitive game tracker that instantly generates detailed reports of advanced team stats and interactive shot charts. It introduces a fresh approach to stat collection by focusing on the Four Factors, turning raw data into actionable coaching insights. By gathering comprehensive metrics for both your team and your opponents alongside a dynamic shot chart, InstaCourt gives coaches and players everything they need to analyze and adjust on the fly.
              </p>
            </div>
            <div className="px-8 pt-0 pb-8">
              <a
                href="https://instacourt-nkgbte2fd-wills-projects-d4e5eaf1.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full rounded-lg overflow-hidden shadow-sm block cursor-pointer"
              >
                <img
                  src="/instacourtnew.png"
                  alt="Basketball Shot Tracker Interface Preview"
                  className="w-full h-auto"
                />
              </a>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-3 py-1 text-sm font-medium text-blue-700 bg-blue-50 rounded-full border border-blue-100">
                  HTML/CSS/JavaScript
                </span>
                <span className="px-3 py-1 text-sm font-medium text-green-700 bg-green-50 rounded-full border border-green-100">
                  Interactive Visualization
                </span>
                <span className="px-3 py-1 text-sm font-medium text-purple-700 bg-purple-50 rounded-full border border-purple-100">
                  Advanced Analytics
                </span>
                <span className="px-3 py-1 text-sm font-medium text-orange-700 bg-orange-50 rounded-full border border-orange-100">
                  Live Tracking
                </span>
                <span className="px-3 py-1 text-sm font-medium text-red-700 bg-red-50 rounded-full border border-red-100">
                  Data Export
                </span>
              </div>
            </div>
          </div>

          {/* Placeholder for future projects */}
          <div className="bg-white rounded-xl shadow-sm border-2 border-primary overflow-hidden">
            <div className="px-8 py-6 border-b border-gray-50">
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-2xl font-medium text-gray-800">
                  Personal Portfolio
                </h2>
                <a
                  href="https://willdeandre.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-gray-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl diagonal-hover"
                >
                  <span className="relative z-10 flex items-center gap-2 text-white">
                    Try Me
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </div>
              <p className="text-gray-600 leading-relaxed">
                This is what you&apos;re looking at. I wanted this portfolio to be a project in itself, so I decided to fully program it from scratch. No Wix, no WordPress, no Squarespace. The design isn&apos;t perfect, but I think the website is pretty cool as a whole. Plus, it shows my work, which at the end of the day is all that really matters. I hope you like it.
              </p>
            </div>
            <div className="px-8 pt-0 pb-8">
              <a
                href="https://willdeandre.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full rounded-lg overflow-hidden shadow-sm block cursor-pointer"
              >
                <img
                  src="/portfolioaboutme.png"
                  alt="Portfolio Preview"
                  className="w-full h-auto"
                />
              </a>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-3 py-1 text-sm font-medium text-red-700 bg-red-50 rounded-full border border-red-100">
                  Next.js
                </span>
                <span className="px-3 py-1 text-sm font-medium text-blue-700 bg-blue-50 rounded-full border border-blue-100">
                  React
                </span>
                <span className="px-3 py-1 text-sm font-medium text-indigo-700 bg-indigo-50 rounded-full border border-indigo-100">
                  TypeScript
                </span>
                <span className="px-3 py-1 text-sm font-medium text-green-700 bg-green-50 rounded-full border border-green-100">
                  Full-Stack Web Dev
                </span>
                <span className="px-3 py-1 text-sm font-medium text-purple-700 bg-purple-50 rounded-full border border-purple-100">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </div>

          {/* Footer spacing */}
          <div className="mt-16"></div>
        </div>
      </div>
    </div>
  );
}