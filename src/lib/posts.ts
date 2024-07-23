import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "blogposts");

// Function to convert markdown to HTML
const convertMarkdownToHtml = async (markdown: string) => {
  const processedContent = await remark().use(html).process(markdown);
  return processedContent.toString();
};
 

const createExcerpt = (htmlContent: string) => {
  const textContent = htmlContent.replace(/<\/?[^>]+>/gi, ''); // Strip HTML tags
  return textContent.split(' ').slice(0, 8).join(' ') + '...';
};

const createExcerptForLatest = (htmlContent: string) => {
  const textContent = htmlContent.replace(/<\/?[^>]+>/gi, '');
  return textContent.split(' ').slice(0, 30).join(' ') + '...'
} 

export async function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = await Promise.all(fileNames.map(async (fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Convert markdown content to HTML
    const contentHtml = await convertMarkdownToHtml(matterResult.content);

    const excerpt = createExcerpt(contentHtml);
    const latestExcerpt = createExcerptForLatest(contentHtml);

    const blogPost = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      excerpt,
      latestExcerpt
    };

    return blogPost;
  }));
  
  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Convert markdown content to HTML
  const contentHtml = await convertMarkdownToHtml(matterResult.content);

  const blogPostWithHTML = {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    contentHtml,
  };

  return blogPostWithHTML;
}
