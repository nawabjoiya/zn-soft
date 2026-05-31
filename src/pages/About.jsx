import PageHero from '../components/ui/PageHero';
import AboutSection from '../components/home/AboutSection';

// 🔥 static frontend data (NO backend needed)
const about = {
  title: 'We are a creative digital agency',
  description:
    'We design and build modern websites, UI/UX interfaces, and scalable frontend experiences for businesses and startups.',
  image: '/assets/images/about/about-main.jpg',

  points: [
    'Modern UI/UX Design',
    'Responsive Web Development',
    'Fast & Optimized Performance',
    'Clean and Scalable Code',
  ],
};

export default function About() {
  return (
    <>
      <PageHero title="About Us" breadcrumb="Pages" />
      <AboutSection about={about} />
    </>
  );
}