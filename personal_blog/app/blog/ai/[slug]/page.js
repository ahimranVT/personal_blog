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
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

export default async function Page({ params }) {
  const filepath = path.join(
    process.cwd(),
    "app",
    "content",
    "ai",
    `${params.slug}.md`
  );

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
      .use(remarkMath) // Add support for LaTeX math
      .use(remarkGfm) // Add support for GitHub Flavored Markdown (tables, etc.)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeKatex) // Process LaTeX equations
      .use(rehypeSlug) // Add IDs to headings
      .use(rehypeAutolinkHeadings) // Add links to headings
      .use(rehypeHighlight) // Add syntax highlighting for code blocks
      .use(rehypeFormat)
      .use(rehypeStringify, { allowDangerousHtml: true });

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
        {/* Add required CSS for KaTeX */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"
          integrity="sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn"
          crossOrigin="anonymous"
        />
        <div
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          className="prose dark:prose-invert max-w-none"
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
