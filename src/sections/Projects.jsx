'use client';

import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import ProjectModal from "@/components/ProjectModal";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUprightIcon from "@/assets/icons/arrow-up-right.svg";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { playClick, playPop } from '@/lib/sound';

// Import project images
import portal from '@/assets/images/portal.png';
import lightSaasLandingPage from '@/assets/images/light-saas-landing-page.png';
import aiStartupLandingPage from '@/assets/images/ai-startup-landing-page.png';
import anonymous from '@/assets/images/anonymous.png';

// Image mapping
const imageMap = {
  'portal.png': portal,
  'light-saas-landing-page.png': lightSaasLandingPage,
  'ai-startup-landing-page.png': aiStartupLandingPage,
  'anonymous.png': anonymous
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await fetch('/api/projects/config', { cache: 'no-store' });
        const data = await response.json();
        
        if (data.success && data.portfolioProjects) {
          const visibleProjects = data.portfolioProjects
            .filter(project => project.visible && project.pinned)
            .sort((a, b) => a.order - b.order)
            .slice(0, 4);
          setProjects(visibleProjects);
        } else {
          console.warn('Failed to load projects from API, using fallback');
          setProjects([]);
        }
      } catch (error) {
        console.error('Error loading projects:', error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader 
          eyebrow="Real World Projects" 
          title="Featured Projects" 
          description="See how I transformed these ideas into successful digital solutions. Each project showcases my skills in full-stack web development, UX/UI, and system architecture." 
        />
        
        {loading ? (
          <div className="flex justify-center mt-10">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-400"></div>
          </div>
        ) : (
          <div className="flex flex-col mt-10 gap-20 md:mt-20">
            {projects.map((project, projectIndex) => (
              <Card key={project.id} className="px-8 pt-8 md:pt-12 md:px-10 pb-0 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`
              }}
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                  <div>
                    <div className="bg-gradient-to-r from-emerald-400 gap-2 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5 text-white font-bold tracking-tight">{project.title}</h3>
                    <hr className="border-t-2 border-white/10 mt-4 md:mt-5" />
                    <ul className="mt-4 flex flex-col gap-4 md:mt-5">
                      {project.results?.map((result, index) => (
                        <li key={index} className="flex gap-3 text-sm md:text-base text-white/70">
                          <CheckIcon className="size-5 md:size-6 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Action Controls */}
                    <div className="flex gap-3 mt-6 mb-4 flex-wrap">
                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => { playPop(); setSelectedProject(project); }}
                        className="bg-gradient-to-r from-emerald-400 to-teal-400 text-gray-950 px-5 h-11 rounded-xl font-bold inline-flex items-center justify-center text-xs md:text-sm shadow-md hover:brightness-110 transition-all"
                      >
                        <span>⚙️ View Case Study</span>
                      </motion.button>

                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => playClick()}
                            className="bg-white/10 text-white px-5 h-11 rounded-xl font-semibold inline-flex items-center justify-center border border-white/20 hover:bg-white/20 text-xs md:text-sm transition-colors"
                          >
                            <ArrowUprightIcon className="size-4 mr-1.5" />
                            <span>Live Site</span>
                          </motion.button>
                        </a>
                      )}

                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => playClick()}
                            className="bg-white/10 text-white px-5 h-11 rounded-xl font-semibold inline-flex items-center justify-center border border-white/20 hover:bg-white/20 text-xs md:text-sm transition-colors"
                          >
                            <ArrowUprightIcon className="size-4 mr-1.5" />
                            <span>GitHub</span>
                          </motion.button>
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="relative mt-8 lg:mt-0 lg:-mr-24 overflow-hidden rounded-t-3xl cursor-pointer" onClick={() => { playPop(); setSelectedProject(project); }}>
                    {imageMap[project.image] && (
                      <Image 
                        src={imageMap[project.image]} 
                        className="mt-4 -mb-6 rounded-3xl object-cover shadow-2xl hover:scale-105 transition-transform duration-500" 
                        alt={project.title} 
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        quality={85}
                        loading="lazy"
                      />
                    )}
                  </div>
                </div>
              </Card>
            ))}
            
            {projects.length === 0 && !loading && (
              <div className="text-center py-12">
                <div className="text-white/60 text-lg">No featured projects configured</div>
                <div className="text-sm text-white/40 mt-2">Visit the admin dashboard to configure your projects</div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="mt-16 text-center">
        <p className="text-white/70">Want to see more of my work? Check out my <a href="/projects" className="underline hover:text-emerald-400 font-medium transition-colors duration-300">Projects</a>.</p>
      </div>

      {/* Case Study Architecture Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}

export default Projects
