import React, { useState } from 'react';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project7.jpg';
import project4 from '../assets/project4.jpg';
import project5 from '../assets/project5.jpg';
import project6 from '../assets/project6.jpg';
import project7 from '../assets/project7.jpg';
import project8 from '../assets/project8.jpg';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

// Project data with detailed descriptions
const projects = [
  {
    id: 1,
    image: project1,
    name: 'Skyline Towers',
    description: 'A 30-story residential complex in downtown Seattle, featuring energy-efficient design, rooftop gardens, and smart home integration. Completed in 2023, this project offers 250 luxury apartments with sustainable materials and panoramic city views.'
  },
  {
    id: 2,
    image: project2,
    name: 'Riverfront Mall',
    description: 'A 500,000 sq. ft. commercial center in Portland, Oregon, designed with eco-friendly architecture, including solar panels and rainwater harvesting. Opened in 2022, it houses 80 retail stores and a community event space.'
  },
  {
    id: 3,
    image: project3,
    name: 'Coastal Villa',
    description: 'A collection of 12 luxury seaside villas in Malibu, California, built in 2024. Each villa features floor-to-ceiling windows, private infinity pools, and eco-conscious construction, offering unparalleled oceanfront living.'
  },
  {
    id: 4,
    image: project4,
    name: 'Urban Office Park',
    description: 'A 10-acre office campus in Austin, Texas, completed in 2023. Designed for tech firms, it includes collaborative workspaces, green courtyards, and LEED Platinum certification for sustainability.'
  },
  {
    id: 5,
    image: project5,
    name: 'Greenwood Estates',
    description: 'A 50-home suburban development in Boulder, Colorado, finished in 2022. This eco-conscious community features solar-powered homes, communal gardens, and pedestrian-friendly pathways.'
  },
  {
    id: 6,
    image: project6,
    name: 'City Bridge',
    description: 'A 1,200-foot suspension bridge in Chicago, completed in 2024, enhancing urban connectivity. Built with advanced materials, it supports pedestrian and cyclist pathways alongside vehicular traffic.'
  },
  {
    id: 7,
    image: project7,
    name: 'Heritage Plaza',
    description: 'A mixed-use development in Boston, completed in 2023, blending historic preservation with modern retail and office spaces. Features restored 19th-century facades and sustainable interiors.'
  },
  {
    id: 8,
    image: project8,
    name: 'Tech Campus',
    description: 'A 20-acre innovation hub in San Francisco, opened in 2024. Designed for startups, it includes cutting-edge R&D labs, co-working spaces, and green rooftops, fostering collaboration and creativity.'
  },
];

const Projects = () => {
  const [showProjects, setShowProjects] = useState(false);

  const handleLearnMoreClick = () => {
    setShowProjects(true);
    const projectsSection = document.getElementById('view-projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShowLessClick = () => {
    setShowProjects(false);
    const portfolioSection = document.getElementById('projects');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="projects" className="w-full">
      {/* Projects Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[80%] w-[90%] m-auto py-16 flex flex-col justify-between items-center gap-6"
      >
        <motion.h3
          variants={slideUpVariants}
          className="text-[#F4A261] text-xl lg:text-2xl uppercase"
        >
          Projects
        </motion.h3>
        <motion.h2
          variants={slideUpVariants}
          className="uppercase text-white text-4xl lg:text-5xl font-bold text-center"
        >
          Featured Projects
        </motion.h2>
        <motion.div
          variants={zoomInVariants}
          className="w-[120px] h-[6px] bg-[#F4A261]"
        ></motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="w-full m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={zoomInVariants}
              className="h-[250px] w-full overflow-hidden"
            >
              <img
                src={project.image}
                alt={`${project.name} project`}
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.button
          variants={zoomInVariants}
           className="bg-[#F4A261] hover:bg-[#E89B4E] text-[#2B3A55] py-3 px-8 rounded-md transition duration-300 font-bold mt-8"
           onClick={handleLearnMoreClick}
          aria-label="View project details"
        >
          Learn More
        </motion.button>
      </motion.div>

      {/* View Projects Section */}
      {showProjects && (
        <div id="view-projects" className="lg:w-[80%] w-[90%] m-auto py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUpVariants}
            className="flex flex-col items-center gap-6"
          >
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={zoomInVariants}
              className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 "
              role="region"
              //style={{ backgroundColor: '#FFFFFF' }}
              aria-labelledby="view-projects-heading"
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={zoomInVariants}
                  className="flex flex-col justify-center items-start rounded-md gap-4 p-6 bg-white hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={project.image}
                    alt={`${project.name} project`}
                    className="w-full h-[200px] object-cover rounded-md"
                  />
                  <h3 className="text-lg lg:text-xl font-bold text-[#2B3A55]">
                    {project.name}
                  </h3>
                  <p className="text-[#2B3A55] text-sm lg:text-base">
                    {project.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
            <motion.button
              variants={zoomInVariants}
              className="bg-[#F4A261] hover:bg-[#E89B4E] text-[#2B3A55] py-3 px-8 rounded-md transition duration-300 font-bold mt-8"
              onClick={handleShowLessClick}
              aria-label="Hide project details"
            >
              Show Less
            </motion.button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Projects;