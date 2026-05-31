import HeroSlider from '../components/home/HeroSlider';
import ServicesSection from '../components/home/ServicesSection';
import AboutSection from '../components/home/AboutSection';
import TeamSection from '../components/home/TeamSection';
import MarqueeSection from '../components/home/MarqueeSection';
import ProcessSection from '../components/home/ProcessSection';
import WorkSection from '../components/home/WorkSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import BlogSection from '../components/home/BlogSection';
import ContactSection from '../components/home/ContactSection';
import CtaSection from '../components/home/CtaSection';

import homeData from '../data/Home';

export default function Home() {
  const data = homeData;

  return (
    <>
      <HeroSlider slides={data.slides} />
      <ServicesSection settings={data.settings} services={data.services} />
      <AboutSection about={data.about} />
      <TeamSection settings={data.settings} team={data.team} />
      <ContactSection videoUrl={data.about?.video_url} />
      <MarqueeSection settings={data.settings} />
      <ProcessSection settings={data.settings} processSteps={data.process_steps} />
      <WorkSection settings={data.settings} features={data.features} />
      <TestimonialsSection settings={data.settings} testimonials={data.testimonials} />
      <BlogSection settings={data.settings} blog={data.blog} />
      <CtaSection settings={data.settings} />
    </>
  );
}