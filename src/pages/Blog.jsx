import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import { Stagger, StaggerItem } from '../components/animation/Stagger';
import blogPosts    from '../data/Blog';

export default function Blog() {
  const posts = blogPosts;

  return (
    <>
      <PageHero title="Blog" />

      <section className="py-20">
        <Stagger className="container-site grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {posts.map((post) => (
            <StaggerItem key={post.id}>
              <motion.article
                whileHover={{ y: -6 }}
                className="overflow-hidden rounded-lg border border-gray-100 shadow-sm bg-white"
              >

                <div className="aspect-video overflow-hidden bg-gray-100">
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>

                <div className="p-6">
                  <div className="mb-2 text-xs text-gray-400">
                    {post.published_at} · {post.comments_count} comments
                  </div>

                  <h3 className="text-lg font-bold hover:text-brand transition">
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
      </section>
    </>
  );
}