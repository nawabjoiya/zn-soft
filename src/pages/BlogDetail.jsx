import { useParams } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import blogPosts from '../data/Blog';

export default function BlogDetail() {
  const { slug } = useParams();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="py-20 text-center">
        Post not found
      </div>
    );
  }

  return (
    <>
      <PageHero title={post.title} breadcrumb="Blog" />

      <section className="py-20">
        <article className="container-site max-w-3xl">

          <img
            src={post.image}
            alt={post.title}
            className="mb-8 w-full rounded-lg"
          />

          <div className="mb-6 text-sm text-gray-400">
            By {post.author} · {post.published_at}
          </div>

          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

        </article>
      </section>
    </>
  );
}