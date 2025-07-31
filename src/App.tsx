import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
<<<<<<< HEAD
=======
  Phone, 
  MapPin, 
>>>>>>> 832fdaf (Initial commit or updated files)
  Code, 
  Database, 
  Globe, 
  Award, 
<<<<<<< HEAD
  ChevronRight,
  User,
=======
  Calendar,
  ChevronRight,
  ExternalLink,
  User,
  BookOpen,
>>>>>>> 832fdaf (Initial commit or updated files)
  Briefcase
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  tech: string[];
  description: string;
  features: string[];
  status: 'Completed' | 'In Progress';
}

interface Skill {
  name: string;
  level: number;
  icon: React.ComponentType<{ className?: string }>;
}

function App(): JSX.Element {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const skills: Skill[] = [
    { name: 'C++', level: 90, icon: Code },
    { name: 'Python', level: 85, icon: Code },
    { name: 'JavaScript', level: 80, icon: Globe },
    { name: 'HTML/CSS', level: 85, icon: Globe },
    { name: 'SQL', level: 75, icon: Database },
    { name: 'Data Structures', level: 75, icon: Database },
    { name: 'Algorithms', level: 70, icon: Database }
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Web Application',
      tech: ['Python', 'Django', 'MySQL', 'HTML/CSS'],
      description: 'A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration. Features responsive design and admin panel for inventory management.',
      features: ['User Authentication', 'Product Catalog', 'Shopping Cart', 'Payment Integration', 'Admin Dashboard'],
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Task Management System',
      tech: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
      description: 'A collaborative task management application with real-time updates, user roles, and project tracking. Includes drag-and-drop functionality and deadline notifications.',
      features: ['Real-time Updates', 'User Roles', 'Drag & Drop', 'Notifications', 'Project Tracking'],
      status: 'In Progress'
    },
    {
      id: 3,
      title: 'Weather Analytics Dashboard',
      tech: ['Python', 'Flask', 'Chart.js', 'API Integration'],
      description: 'A weather data visualization dashboard that fetches real-time weather information and displays historical trends with interactive charts and forecasting.',
      features: ['Real-time Data', 'Interactive Charts', 'Historical Trends', 'API Integration', 'Forecasting'],
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Student Grade Management',
      tech: ['C++', 'File Handling', 'Data Structures'],
      description: 'A console-based application for managing student grades with file persistence, search functionality, and statistical analysis of academic performance.',
      features: ['File Persistence', 'Search Functionality', 'Statistical Analysis', 'Grade Calculation', 'Report Generation'],
      status: 'Completed'
    }
  ];

  const certifications: string[] = [
    'Python Programming - Cynbit Technologies',
    'AI & Machine Learning - Accelerate Brainwave AI LLP',
    'Data Structures & Algorithms - NPTEL',
    'Web Development Fundamentals - Self-Paced Learning'
  ];

  const handleProjectToggle = (projectId: number): void => {
    setActiveProject(activeProject === projectId ? null : projectId);
  };

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <User className="w-16 h-16 text-white" aria-hidden="true" />
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
              Chelsi Jain
            </h1>
            <p className="text-xl sm:text-2xl text-blue-200 mb-2">
              Computer Science & Engineering Student
            </p>
            <p className="text-lg text-slate-300">
              Poornima College of Engineering • Third Year B.Tech
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 mb-8 border border-white/20">
            <p className="text-lg text-slate-200 leading-relaxed">
              Motivated CS engineering student with strong academic performance (96.2% in 10th, 88% in 12th) 
              and practical experience through internships. Passionate about building impactful projects and 
              solving complex problems through code. Currently interning at Linux World to gain real-world 
              development experience.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              aria-label="View my projects"
            >
              View Projects <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 border border-white/30 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
              aria-label="Get in touch with me"
            >
              Get in Touch <Mail className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="skills-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="skills-heading" className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent className="w-6 h-6 text-blue-400" aria-hidden="true" />
                    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2" role="progressbar" aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100} aria-label={`${skill.name} proficiency: ${skill.level}%`}>
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-slate-300 text-sm mt-2">{skill.level}% Proficiency</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20" aria-labelledby="projects-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="projects-heading" className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <article 
                key={project.id}
                className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label="Technologies used">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm" role="listitem">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => handleProjectToggle(project.id)}
                    className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                    aria-expanded={activeProject === project.id}
                    aria-controls={`project-details-${project.id}`}
                  >
                    {activeProject === project.id ? 'Hide Details' : 'View Details'}
                    <ChevronRight className={`w-4 h-4 transition-transform ${
                      activeProject === project.id ? 'rotate-90' : ''
                    }`} aria-hidden="true" />
                  </button>
                </div>
                
                {activeProject === project.id && (
                  <div id={`project-details-${project.id}`} className="px-6 pb-6 border-t border-white/10">
                    <div className="pt-4">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                      <ul className="space-y-2" role="list">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-slate-300" role="listitem">
                            <div className="w-2 h-2 bg-blue-400 rounded-full" aria-hidden="true"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </article>
            ))}
            
            {/* Coming Soon Card */}
            <article className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 border-dashed hover:bg-white/10 transition-all duration-300 overflow-hidden">
              <div className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full flex items-center justify-center">
                  <Code className="w-8 h-8 text-blue-400/60" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-white/80 mb-2">More Projects Coming Soon</h3>
                <p className="text-slate-400 mb-4">
                  Currently working on exciting new projects that will be showcased here soon.
                </p>
                <div className="flex flex-wrap gap-2 justify-center" role="list" aria-label="Upcoming technologies">
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400/60 rounded-full text-sm" role="listitem">
                    React
                  </span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400/60 rounded-full text-sm" role="listitem">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-green-500/10 text-green-400/60 rounded-full text-sm" role="listitem">
                    AI/ML
                  </span>
                </div>
              </div>
            </article>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-slate-400 text-lg">
              🚀 This portfolio is continuously updated with new projects and achievements
            </p>
          </div>
        </div>
      </section>

      {/* Certifications & Experience */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="experience-heading">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <div>
              <h2 id="certifications-heading" className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <Award className="w-8 h-8 text-yellow-400" aria-hidden="true" />
                Certifications
              </h2>
              <div className="space-y-4" role="list">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20" role="listitem">
                    <p className="text-slate-200">{cert}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 id="experience-heading" className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <Briefcase className="w-8 h-8 text-purple-400" aria-hidden="true" />
                Experience
              </h2>
              <div className="space-y-6">
                <article className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-2">Software Development Intern</h3>
                  <p className="text-blue-400 mb-2">Linux World</p>
                  <p className="text-slate-300 mb-3">Current Position</p>
                  <p className="text-slate-300">
                    Gaining practical experience in real-world development environments, 
                    working with modern technologies and contributing to production projects.
                  </p>
                </article>

                <article className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-2">AADHAR 13 Hackathon</h3>
                  <p className="text-blue-400 mb-2">Participant</p>
                  <p className="text-slate-300 mb-3">2024</p>
                  <p className="text-slate-300">
                    Collaborated with team members to develop innovative solutions under time constraints, 
                    demonstrating quick learning and problem-solving abilities.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20" aria-labelledby="contact-heading">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            I'm always open to discussing new opportunities and collaborations
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a 
              href="https://linkedin.com/in/chelsi-jain" 
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              aria-label="Connect with Chelsi on LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
              <p className="text-slate-300">Connect professionally</p>
            </a>
            
            <a 
              href="https://github.com/chelsi-jain" 
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              aria-label="View Chelsi's code on GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
              <p className="text-slate-300">View my code</p>
            </a>
            
            <a 
              href="mailto:chelsi.jain@example.com" 
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              aria-label="Send an email to Chelsi"
            >
              <Mail className="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-slate-300">Send a message</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2024 Chelsi Jain. Built with passion and code.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;