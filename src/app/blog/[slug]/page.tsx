import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import ReadingProgress from "@/components/ui/ReadingProgress";
import rehypePrettyCode from "rehype-pretty-code";
import { SEO } from "@/constants";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import BlogViewCounter from "@/components/ui/BlogViewCounter";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);
  if (!post) {
    return { title: "Post Not Found" };
  }
  const baseUrl = SEO.url.replace(/\/$/, "");
  
  return {
    title: `${post.title} | Karan Kumar`,
    description: post.excerpt,
    alternates: {
      canonical: `${baseUrl}/blog/${resolvedParams.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${baseUrl}/blog/${resolvedParams.slug}`,
      type: "article",
      publishedTime: post.date,
      images: [post.cover],
    },
  };
}

const components = {
  h1: (props: any) => <h1 className="mt-8 mb-4 text-4xl font-display font-bold text-text-primary" {...props} />,
  h2: (props: any) => <h2 className="mt-12 mb-4 text-2xl font-display font-semibold text-text-primary" {...props} />,
  h3: (props: any) => <h3 className="mt-8 mb-4 text-xl font-display font-semibold text-text-primary" {...props} />,
  p: (props: any) => <div className="mb-6 text-lg leading-relaxed text-text-secondary" {...props} />,
  ul: (props: any) => <ul className="mb-6 list-disc pl-6 text-lg text-text-secondary marker:text-accent" {...props} />,
  ol: (props: any) => <ol className="mb-6 list-decimal pl-6 text-lg text-text-secondary marker:text-accent" {...props} />,
  li: (props: any) => <li className="mb-2" {...props} />,
  a: (props: any) => <a className="text-accent underline underline-offset-4 hover:text-accent-glow transition-colors" {...props} />,
  img: (props: any) => (
    <div className="relative aspect-video w-full my-8 overflow-hidden rounded-3xl border border-border-medium">
      <Image src={props.src} alt={props.alt || ""} fill className="object-cover" />
    </div>
  ),
  Alert,
  AlertTitle,
  AlertDescription,
  Badge,
};

const options = {
  mdxOptions: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "one-dark-pro",
          keepBackground: false,
        },
      ],
    ],
  },
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: post.cover,
    datePublished: post.date,
    dateModified: post.date,
    author: [{
      "@type": "Person",
      name: "Karan Kumar",
      url: SEO.url
    }]
  };

  return (
    <main className="min-h-screen bg-bg-primary pt-20 pb-24 lg:pt-28 relative">
      <div className="ambient-bg" />
      <ReadingProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <article className="w-full">
          <Link 
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to all posts
          </Link>
          
          <header className="mb-8">
            <div className="mb-6 flex flex-wrap items-center gap-4 text-sm font-mono text-text-muted">
              <span className="rounded-full bg-accent/10 px-3 py-1 text-accent border border-accent/20 uppercase tracking-widest text-[10px]">
                {post.tag}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {post.read} min read
              </span>
              <BlogViewCounter slug={resolvedParams.slug} />
            </div>
            
            <h1 className="text-display font-display text-4xl font-bold leading-tight text-text-primary md:text-5xl lg:text-6xl mb-6">
              {post.title}
            </h1>
            
            <p className="text-xl text-text-secondary leading-relaxed max-w-3xl">
              {post.excerpt}
            </p>
          </header>

          {post.cover && (
            <div className="relative aspect-21/9 w-full overflow-hidden rounded-3xl border border-border-medium mb-16">
              <Image
                src={post.cover}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="prose prose-invert prose-lg max-w-none md:prose-xl">
            <MDXRemote source={post.content} components={components} options={options as any} />
          </div>
        </article>
      </div>
    </main>
  );
}
