import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import PageHero from '../components/ui/PageHero';
import { Stagger, StaggerItem } from '../components/animation/Stagger';
import { zoomIn } from '../components/animation/variants';

import projectsData from '../data/Projects';

export default function Projects() {
  const projects = projectsData;

  return (
    <>
      <PageHero title="Projects" />

      <section className="py-20">
        <Stagger className="container-site grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <StaggerItem key={project.id} variant={zoomIn}>

              <Link
                to={`/projects/${project.slug}`}
                className="group block overflow-hidden rounded-lg shadow-sm bg-white"
              >

                <motion.div whileHover={{ y: -6 }}>

                  {/* IMAGE */}
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100">

                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.5 }}
                    />

                  </div>

                  {/* CONTENT */}
                  <div className="border border-t-0 border-gray-100 p-5">

                    <span className="text-xs font-semibold uppercase text-brand">
                      {project.category}
                    </span>

                    <h3 className="mt-1 text-lg font-bold transition-colors group-hover:text-brand">
                      {project.title}
                    </h3>

                  </div>

                </motion.div>

              </Link>

            </StaggerItem>
          ))}

        </Stagger>
      </section>
    </>
  );
}