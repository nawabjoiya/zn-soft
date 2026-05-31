import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimateIn from '../animation/AnimateIn';
import SectionBadge from '../ui/SectionBadge';
import { Stagger, StaggerItem } from '../animation/Stagger';

const blogData = {
  badge: 'Our Blog',
  title: 'Latest Insights & Updates',
  posts: [
    {
      id: 1,
      slug: 'future-of-web-development',
      title: 'The Future of Web Development in 2026',
      excerpt:
        'Explore the latest trends shaping modern web development and how businesses can stay ahead.',
      image: '/assets/images/blog/blog-1-1.jpg',
      published_at: '2026-05-20',
      comments_count: 3,
    },
    {
      id: 2,
      slug: 'ui-ux-design-principles',
      title: 'UI/UX Design Principles That Drive Conversions',
      excerpt:
        'Learn how effective design improves user experience and boosts business performance.',
      image: '/assets/images/blog/blog-1-2.jpg',
      published_at: '2026-05-15',
      comments_count: 5,
    },
    {
      id: 3,
      slug: 'ai-in-business-growth',
      title: 'How AI is Transforming Business Growth',
      excerpt:
        'Discover how artificial intelligence is reshaping industries and driving innovation.',
      image: '/assets/images/blog/blog-1-3.jpg',
      published_at: '2026-05-10',
      comments_count: 2,
    },
  ],
};

export default function BlogSection() {
  const { badge, title, posts } = blogData;

  return (
    <section className="bg-white py-20">
      <div className="container-site text-center">

        {/* HEADER */}
        <AnimateIn variant="fadeInUp">
          <SectionBadge>{badge}</SectionBadge>
          <h2 className="section-title">{title}</h2>
        </AnimateIn>

        {/* BLOG GRID */}
        <Stagger className="mt-14 grid gap-8 md:grid-cols-3" stagger={0.16}>
          {posts.map((post, i) => (
            <StaggerItem key={post.id}>
              <motion.article
                className="group overflow-hidden rounded-lg border border-gray-100 text-left shadow-sm"
                whileHover={{ y: -8 }}
              >
                {/* IMAGE */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <div className="mb-3 flex gap-4 text-xs text-gray-400">
                    <span>
                      {new Date(post.published_at).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>

                    <span>{post.comments_count} Comment</span>
                  </div>

                  <h3 className="text-lg font-bold text-dark transition group-hover:text-brand">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    {post.excerpt}
                  </p>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}