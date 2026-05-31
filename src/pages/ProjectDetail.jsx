import { useParams } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import projects from '../data/projects';

export default function ProjectDetail() {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="py-20 text-center">
        Project not found
      </div>
    );
  }

  return (
    <>
      <PageHero title={project.title} breadcrumb="Projects" />

      <section className="py-20">
        <div className="container-site max-w-4xl">

          {/* IMAGE */}
          <img
            src={project.image}
            alt={project.title}
            className="mb-8 w-full rounded-lg"
          />

          {/* CATEGORY */}
          <span className="text-sm font-semibold uppercase text-brand">
            {project.category}
          </span>

          {/* EXCERPT */}
          <p className="mt-4 text-lg text-gray-600">
            {project.excerpt}
          </p>

          {/* CONTENT */}
          <div
            className="prose mt-8 max-w-none"
            dangerouslySetInnerHTML={{ __html: project.content || '' }}
          />

        </div>
      </section>
    </>
  );
}