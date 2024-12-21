import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import OnThisPage from "@/components/onthispage";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

export default async function Page({ params }) {
  // Use process.cwd() to get the root directory of the project
  const filepath = path.join(process.cwd(), "content", "ai", `${params.slug}.md`);
  console.log("Attempting to read file at:", filepath);

  try {
    if (!fs.existsSync(filepath)) {
      console.error("File not found:", filepath);
      notFound();
      return;
    }

    const fileContent = fs.readFileSync(filepath, "utf-8");
    const { content, data } = matter(fileContent);

    const processor = unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeDocument, { title: "👋🌍" })
      .use(rehypeFormat)
      .use(rehypeStringify)
      .use(rehypeSlug)
      .use(rehypeAutolinkHeadings);

    const htmlContent = (await processor.process(content)).toString();

    return (
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
        <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">
          &quot;{data.description}&quot;
        </p>
        <div className="flex gap-2">
          <p className="text-sm text-gray-500 mb-4 italic">By {data.author}</p>
          <p className="text-sm text-gray-500 mb-4">{data.date}</p>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          className="prose dark:prose-invert"
        ></div>
        <OnThisPage htmlContent={htmlContent} />
      </div>
    );
  } catch (error) {
    console.error("Error processing markdown file:", error);
    notFound();
    return;
  }
}