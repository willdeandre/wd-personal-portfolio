import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function About() {
  const skillBoxes = [
    {
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/WashU_St._Louis_seal.svg/1200px-WashU_St._Louis_seal.svg.png',
      title: 'Washington University',
      description: 'Economics + Finance\nClub Basketball\nWBB Practice Player',
      colorClasses: 'from-white to-white',
      borderColor: 'border-primary',
    },
    {
      image: 'https://branding.web-resources.upenn.edu/sites/default/files/styles/card_3x2/public/2022-03/UniversityofPennsylvania_Shield_RGB-2.png?h=3c287ac3&itok=HgG1DNc-',
      title: 'University of Pennsylvania',
      description: 'Master of Computer and Information Technology\nExpected 2026',
      colorClasses: 'from-white to-white',
      borderColor: 'border-secondary',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6UDiZ59zOVF0olYw171sXEM9DL9Jfs2vUjg&s',
      title: 'Sports Business Classroom',
      description: '2025 Salary Cap Major\nBusiness of Basketball',
      colorClasses: 'from-white to-white',
      borderColor: 'border-accent',
    },
    {
      image: 'https://i.imgur.com/vwgfB5U.png',
      title: 'Gymrat',
      description: '15 Years Playing Experience,\n5 Years Coaching Experience',
      colorClasses: 'from-white to-white',
      borderColor: 'border-primary',
    },
  ];

  const experiences = [
    {
      company: 'Ocean Tomo',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo25TZRB1AOY4oQztVdYnKrwLgw46FjPdHWw&s',
      role: 'Intellectual Property Analyst',
      period: 'Summer 2024',
      category: 'CONSULTING',
      categoryColor: 'bg-primary',
      hoverColor: 'group-hover:text-primary',
      skills: ['Microsoft Excel', 'Intellectual Property Valuation', 'Market Research'],
    },
    {
      company: 'Thirty-5 Capital',
      logo: 'https://images.squarespace-cdn.com/content/v1/62153bf0125c032d4634787c/15d3d485-7564-45af-b12b-1c145252a1f1/35+Capital+Logo.png?format=1500w',
      role: 'Business Development Intern',
      period: 'Summer 2023',
      category: 'SPORTS PRIVATE EQUITY',
      categoryColor: 'bg-secondary',
      hoverColor: 'group-hover:text-secondary',
      skills: ['Financial Projections', 'Market Research', 'Sales & Account Management'],
    },
    {
      company: 'Samudra Pacific Capital Partners',
      logo: 'https://sampac.vc/static/favicon.ico',
      role: 'Associate',
      period: 'March 2021 - July 2022',
      category: 'VENTURE CAPITAL',
      categoryColor: 'bg-accent',
      hoverColor: 'group-hover:text-accent',
      skills: ['Portfolio Analysis', 'Financial Reporting'],
    },
  ];

  return (
    <section className="py-8 bg-[#E5F4E3]">
      <div className="container mx-auto px-6 pr-20">
        {/* Top Section: Skill Boxes + Photo */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          {/* Skills Boxes */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-6 text-black">About Me</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillBoxes.map((skill, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${skill.colorClasses} rounded-xl p-6 shadow-lg border-2 ${skill.borderColor} text-center`}
                >
                  <div className="w-16 h-16 mb-3 mx-auto flex items-center justify-center">
                    <img
                      src={skill.image}
                      alt={skill.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary">{skill.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Headshot + Basketball Images */}
          <div className="w-full md:w-1/2 max-w-sm flex flex-col items-center gap-6">
            {/* Main Profile Photo */}
            <div
              className="relative rounded-2xl overflow-hidden group photo-container-court"
              style={{
                width: '280px',
                height: '420px',
                background: '#003F91',
                padding: '10px',
              }}
            >
              <img
                src="/IMG_5034.png"
                alt="Will DeAndre"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Three Basketball Images */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-[390px]">
              <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                <img
                  src="/team-chip.png"
                  alt="Team championship"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                <img
                  src="/basketball-action.png"
                  alt="Basketball action shot"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                <img
                  src="/game-cele.png"
                  alt="Game celebration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bouncing Arrow into Experience */}
        <div className="flex justify-center -mt-4 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary/50" />
        </div>

        {/* Experience Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-12 text-black">Experience</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-8 shadow-xl border-2 border-primary"
              >
                <div
                  className={`absolute -top-4 left-4 right-4 ${exp.categoryColor} text-white text-xs font-bold px-4 py-2 rounded-2xl shadow-lg`}
                >
                  <div className="text-center">{exp.category}</div>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-12 h-auto object-contain"
                  />
                  <h3 className="text-xl font-bold text-gray-900 transition-colors">{exp.company}</h3>
                </div>

                <h4 className="text-primary font-semibold mb-1">{exp.role}</h4>
                <span className="text-sm text-gray-500 mb-4 block">{exp.period}</span>

                {/* Skills Section */}
                <div className="mt-4">
                  <h5 className="text-sm font-semibold text-gray-800 mb-3">Skills Developed:</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}