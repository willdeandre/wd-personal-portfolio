// src/app/blog/page.tsx
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Metadata } from "next";
import { Clock, Calendar, BookOpen, Star, ArrowRight } from "lucide-react";
import { Suspense } from "react";

interface PostMeta {
  slug: string;
  title: string;
  date: string;
  readTime: number;
  description?: string;
  excerpt?: string;
  coverImage?: string;
  tags?: string[];
  featured?: boolean;
}

interface BlogData {
  title: string;
  date: string;
  description?: string;
  excerpt?: string;
  coverImage?: string;
  tags?: string[];
  featured?: boolean;
}

// Generate metadata for SEO
export const metadata: Metadata = {
  title: 'Blog | Will DeAndre',
  description: 'More coming soon!',
  openGraph: {
    title: 'Blog | Will DeAndre',
    description: 'Basketball insights and data-driven analysis',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Will DeAndre',
    description: 'Expert basketball analytics insights and data-driven analysis',
  },
};

// Utility function to calculate reading time
function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

// Blog post card component
function BlogPostCard({ post, isFeatured = false }: { post: PostMeta; isFeatured?: boolean }) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  if (isFeatured) {
    return (
      <Link href={`/blog/${post.slug}`} className="group block">
        <article className="relative bg-white rounded-xl p-8 shadow-lg border-2 border-primary hover:shadow-xl transition-all duration-300">
          {/* Featured badge */}
          <div className="absolute -top-4 left-6 bg-primary text-white text-xs font-semibold px-4 py-2 rounded-full">
            <Star className="w-3 h-3 inline mr-1" />
            FEATURED
          </div>
          
          <div className="flex items-center gap-4 mb-4 mt-2">
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{post.readTime} min read</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Calendar className="w-4 h-4" />
              <time className="text-sm">{formattedDate}</time>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-primary mb-4 leading-tight group-hover:text-secondary transition-colors">
            {post.title}
          </h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-primary font-semibold group-hover:text-secondary transition-colors">
              Read Analysis →
            </span>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-secondary transition-all duration-300 h-full flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-1 text-gray-600">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{post.readTime} min</span>
          </div>
          <span className="text-gray-300">•</span>
          <time className="text-sm text-gray-500">
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}
          </time>
        </div>
        
        <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2 flex-grow-0">
          {post.title}
        </h3>
        
        <p className="text-gray-700 mb-4 leading-relaxed text-sm line-clamp-3 flex-grow">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <span className="text-primary font-medium group-hover:text-secondary text-sm transition-colors">
            Read more
          </span>
          <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
        </div>
      </article>
    </Link>
  );
}

// Loading skeleton component
function BlogSkeleton() {
  return (
    <div className="space-y-8">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="animate-pulse">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-4 bg-gray-200 rounded w-20"></div>
              <div className="h-4 bg-gray-200 rounded w-24"></div>
            </div>
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
            <div className="space-y-2 mb-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function BlogIndex() {
  let posts: PostMeta[] = [];
  
  try {
    // Read all files in content/blog
    const contentDir = path.join(process.cwd(), "content/blog");
    
    if (!fs.existsSync(contentDir)) {
      console.warn('Blog content directory not found');
      return <div>Blog content not found</div>;
    }

    const files = fs.readdirSync(contentDir);
    
    const processedPosts = files
      .filter(filename => filename.endsWith('.mdx') || filename.endsWith('.md'))
      .map((filename): PostMeta | null => {
        try {
          const slug = filename.replace(/\.mdx?$/, "");
          const filePath = path.join(contentDir, filename);
          const source = fs.readFileSync(filePath, "utf8");
          const { data, content } = matter(source);
          const typedData = data as BlogData;
          const readTime = calculateReadTime(content);
          
          return { 
            slug, 
            title: typedData.title || 'Untitled', 
            date: typedData.date || new Date().toISOString(),
            readTime,
            description: typedData.description,
            excerpt: typedData.excerpt || 'No excerpt provided',
            coverImage: typedData.coverImage,
            tags: typedData.tags,
            featured: typedData.featured
          } as PostMeta;
        } catch (error) {
          console.error(`Error processing ${filename}:`, error);
          return null;
        }
      })
      .filter((post): post is PostMeta => post !== null);

    posts = processedPosts;

    // Sort posts by date (newest first)
    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error loading blog posts:', error);
  }

  const featuredPost = posts.find(post => post.featured) || posts[0];
  const regularPosts = posts.filter(post => post.slug !== featuredPost?.slug);

  return (
    <div className="py-8">
      <div className="max-w-3xl mx-auto">
        {/* Compact Header */}
        <div className="mb-12">

          <h1 className="text-4xl font-bold text-black mb-4">Analytics & Insights</h1>
          
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-12">
            <BlogPostCard post={featuredPost} isFeatured={true} />
          </div>
        )}

        {/* All Posts */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-primary">Latest Posts</h2>
            <div className="text-gray-600 text-sm">
              {posts.length} article{posts.length !== 1 ? 's' : ''}
            </div>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-xl shadow-lg border border-gray-100">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No posts yet</h3>
              <p className="text-gray-500">Check back soon for basketball analytics insights!</p>
            </div>
          ) : (
            <Suspense fallback={<BlogSkeleton />}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularPosts.map((post) => (
                  <BlogPostCard key={post.slug} post={post} />
                ))}
              </div>
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
}