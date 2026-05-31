/** Navigation structure aligned with Zefxa template and app routes. */
export function buildNavigation(services = [], projects = [], blogPosts = []) {
  const serviceChildren = [
    { label: 'All Services', to: '/services' },
    ...services.map((s) => ({
      label: s.title,
      to: `/services/${s.slug}`,
    })),
  ];

  const projectChildren = [
    { label: 'All Projects', to: '/projects' },
    ...projects.slice(0, 8).map((p) => ({
      label: p.title,
      to: `/projects/${p.slug}`,
    })),
  ];

  const blogChildren = [
    { label: 'Blog Grid', to: '/blog' },
    ...blogPosts.slice(0, 6).map((b) => ({
      label: b.title,
      to: `/blog/${b.slug}`,
    })),
  ];

  return [
    { label: 'Home', to: '/' },
    {
      label: 'Pages',
      children: [
        { label: 'About Us', to: '/about' },
        { label: 'Team', to: '/team' },
        { label: 'FAQ', to: '/faq' },
        { label: 'Contact', to: '/contact' },
      ],
    },
    { label: 'Services', children: serviceChildren },
    { label: 'Projects', children: projectChildren },
    { label: 'Blog', children: blogChildren },
    { label: 'Contact', to: '/contact' },
  ];
}
