'use client';

import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUprightIcon from "@/assets/icons/arrow-up-right.svg";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
          // Fallback to default projects if API fails
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
                    <div className="flex gap-4 mt-6 mb-4 flex-col sm:flex-row">
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                          <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                            className="bg-white px-6 text-gray-950 h-12 w-full rounded-xl font-bold inline-flex items-center justify-center border border-white hover:bg-gray-100 transition-colors shadow-md"
                          >
                            <ArrowUprightIcon className="size-5 mr-2" />
                            <span>Visit Live Site</span>
                          </motion.button>
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                          <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                            className="text-white px-6 bg-white/10 backdrop-blur-sm h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors"
                          >
                            <ArrowUprightIcon className="size-5 mr-2" />
                            <span>Visit on GitHub</span>
                          </motion.button>
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="relative mt-8 lg:mt-0 lg:-mr-24 overflow-hidden rounded-t-3xl">
                    {imageMap[project.image] && (
                      <Image 
                        src={imageMap[project.image]} 
                        className="mt-4 -mb-6 rounded-3xl object-cover shadow-2xl" 
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
    </section>
  );
}


export default Projects