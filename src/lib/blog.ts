import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const contentDir = path.join(process.cwd(), "src/content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  tag: string;
  date: string;
  read: number;
  content: string;
}


export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const realSlug = slug.replace(/\.mdx$/, "");
    const fullPath = path.join(contentDir, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    return {
      slug: realSlug,
      title: data.title,
      excerpt: data.description || data.excerpt,
      cover: data.cover || "/images/placeholder.jpg",
      tag: data.tag || "Article",
      date: data.date,
      read: Math.ceil(stats.minutes),
      content,
    };
  } catch (e) {
    return null;
  }
}


export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(contentDir)) {
    return [];
  }
  
  const slugs = fs.readdirSync(contentDir).filter((file) => file.endsWith(".mdx"));
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort((post1, post2) => (new Date(post1.date) > new Date(post2.date) ? -1 : 1));
  
  return posts;
}
