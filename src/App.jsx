import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import PageTransition from './components/animation/PageTransition';
import Layout from './components/layout/Layout';

import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import About from './pages/About';
import Team from './pages/Team';
import Faq from './pages/Faq';

import siteData from './data/siteData';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          element={
            <Layout
              settings={siteData.settings}
              services={siteData.nav?.services ?? siteData.services}
              projects={siteData.nav?.projects ?? siteData.projects}
              blog={siteData.nav?.blog ?? siteData.blog}
              about={siteData.about}
              team={siteData.team}
            />
          }
        >
          <Route
            index
            element={
              <PageTransition>
                <Home data={siteData} />
              </PageTransition>
            }
          />

          <Route
            path="services"
            element={
              <PageTransition>
                <Services />
              </PageTransition>
            }
          />

          <Route
            path="services/:slug"
            element={
              <PageTransition>
                <ServiceDetail />
              </PageTransition>
            }
          />

          <Route
            path="projects"
            element={
              <PageTransition>
                <Projects />
              </PageTransition>
            }
          />

          <Route
            path="projects/:slug"
            element={
              <PageTransition>
                <ProjectDetail />
              </PageTransition>
            }
          />

          <Route
            path="blog"
            element={
              <PageTransition>
                <Blog />
              </PageTransition>
            }
          />

          <Route
            path="blog/:slug"
            element={
              <PageTransition>
                <BlogDetail />
              </PageTransition>
            }
          />

          <Route
            path="contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />

          <Route
            path="about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />

          <Route
            path="team"
            element={
              <PageTransition>
                <Team />
              </PageTransition>
            }
          />

          <Route
            path="faq"
            element={
              <PageTransition>
                <Faq />
              </PageTransition>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}