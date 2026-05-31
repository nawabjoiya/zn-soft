import { useParams } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import AnimateIn from '../components/animation/AnimateIn';
import services from '../data/Services';

export default function ServiceDetail() {
  const { slug } = useParams();

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="py-20 text-center">
        Service not found
      </div>
    );
  }

  return (
    <>
      <PageHero title={service.title} breadcrumb="Services" />

      <section className="py-20">
        <AnimateIn className="container-site max-w-3xl" variant="fadeInUp">

          {/* EXCERPT */}
          <p className="text-lg text-gray-600">
            {service.excerpt}
          </p>

          {/* CONTENT */}
          <div
            className="prose mt-8 max-w-none text-gray-600"
            dangerouslySetInnerHTML={{
              __html: service.content || '<p>Content coming soon.</p>',
            }}
          />

        </AnimateIn>
      </section>
    </>
  );
}