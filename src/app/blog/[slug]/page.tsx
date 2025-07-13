// src/app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen } from "lucide-react";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

interface BlogPostData {
  title: string;
  date: string;
  description?: string;
  tags?: string[];
  author?: string;
  readTime?: number;
}

// Enhanced MDX Components with modern styling
const components = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-8 leading-tight">
      {children}
    </h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 mt-12 leading-tight border-b border-slate-200 pb-2">
      {children}
    </h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl md:text-2xl font-semibold text-slate-700 mb-4 mt-8">
      {children}
    </h3>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="text-lg leading-relaxed mb-6 text-slate-600">
      {children}
    </p>
  ),
  img: ({ src, alt }: { src: string; alt: string }) => (
    <figure className="my-12">
      <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-slate-50 to-slate-100 p-2">
        <img
          src={src}
          alt={alt}
          className="w-full rounded-xl object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      {alt && (
        <figcaption className="text-center text-sm text-slate-500 mt-4 italic font-medium">
          {alt}
        </figcaption>
      )}
    </figure>
  ),
  a: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
      href={href}
      className="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-2 font-medium transition-colors duration-200"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
  strong: ({ children }: { children: React.ReactNode }) => (
    <strong className="font-bold text-slate-900 bg-yellow-50 px-1 rounded">
      {children}
    </strong>
  ),
  em: ({ children }: { children: React.ReactNode }) => (
    <em className="italic text-slate-700 font-medium">{children}</em>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="relative border-l-4 border-blue-500 pl-8 my-10 italic text-slate-700 bg-gradient-to-r from-blue-50 to-indigo-50 py-6 rounded-r-xl shadow-sm">
      <div className="absolute -left-2 top-4 w-4 h-4 bg-blue-500 rounded-full"></div>
      {children}
    </blockquote>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="list-none pl-0 mb-8 space-y-3 text-lg text-slate-600">
      {children}
    </ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="list-decimal pl-6 mb-8 space-y-3 text-lg text-slate-600 marker:text-blue-500 marker:font-bold">
      {children}
    </ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="leading-relaxed flex items-start">
      <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
      <span>{children}</span>
    </li>
  ),
  code: ({ children }: { children: React.ReactNode }) => (
    <code className="bg-slate-100 text-slate-800 px-2 py-1 rounded-md font-mono text-sm border">
      {children}
    </code>
  ),
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre className="bg-slate-900 text-slate-100 p-6 rounded-xl overflow-x-auto my-8 shadow-lg border border-slate-700">
      {children}
    </pre>
  ),
};

// Utility function to calculate reading time
function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  try {
    const filePath = path.join(process.cwd(), "content/blog", `${params.slug}.mdx`);
    const source = fs.readFileSync(filePath, "utf8");
    const { data } = matter(source);
    const typedData = data as BlogPostData;

    return {
      title: `${typedData.title} | Will DeAndre Basketball Analytics`,
      description: typedData.description || `Basketball analytics insights by Will DeAndre`,
      openGraph: {
        title: typedData.title,
        description: typedData.description,
        type: 'article',
        publishedTime: typedData.date,
      },
      twitter: {
        card: 'summary_large_image',
        title: typedData.title,
        description: typedData.description,
      },
    };
  } catch {
    return {
      title: 'Post Not Found | Will DeAndre Basketball Analytics',
    };
  }
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = params;
  
  try {
    const filePath = path.join(process.cwd(), "content/blog", `${slug}.mdx`);
    const source = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(source);
    const typedData = data as BlogPostData;

    const readTime = calculateReadTime(content);
    const publishDate = new Date(typedData.date);

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-2xl mx-auto py-8 px-6">
          {/* Navigation */}
          <nav className="mb-12">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Blog
            </Link>
          </nav>

          {/* Article Header */}
          <header className="mb-16">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-sm">
                <BookOpen className="w-3 h-3" />
                ANALYSIS
              </span>
              <div className="flex items-center gap-1 text-sm text-slate-500">
                <Clock className="w-4 h-4" />
                {readTime} min read
              </div>
              <div className="flex items-center gap-1 text-sm text-slate-500">
                <Calendar className="w-4 h-4" />
                {publishDate.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-8 leading-tight">
              {typedData.title}
            </h1>

            {/* Description */}
            {typedData.description && (
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                {typedData.description}
              </p>
            )}
            
          </header>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
              <MDXRemote source={content} components={components} />
            </div>
          </article>

          {/* Share Section */}
          <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl border border-blue-100">
            <div className="flex items-center justify-between flex-wrap gap-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Share this analysis</h3>
                <p className="text-slate-600">Found this insightful? Share it with fellow basketball enthusiasts.</p>
              </div>
              <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>

          {/* Call to Action Footer */}
          <footer className="mt-16">
            <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-3xl font-bold mb-4">Ready for more insights?</h3>
                <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                  Dive deeper into basketball analytics with data-driven analysis that goes beyond the surface stats.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link 
                    href="/blog" 
                    className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    Explore More Posts
                  </Link>
                  <Link 
                    href="/about" 
                    className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-slate-900 transition-colors duration-200"
                  >
                    About Will
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error loading blog post:', error);
    notFound();
  }
}