import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const dirContent = fs.readdirSync("app/content/ai", "utf-8");

const blogs = dirContent.map((file) => {
  const fileContent = fs.readFileSync(`app/content/ai/${file}`, "utf-8");
  const { data } = matter(fileContent);
  return data;
});

// Import metadata for blogs
// const blogMetadata = {
//   "markdown-sample": {
//     title: "Introduction to AI",
//     description:
//       "A comprehensive guide to understanding artificial intelligence",
//     image: "/images/ai-logo.png",
//     date: "2024-01-15",
//   },
//   "Full-Markdown": {
//     title: "Introduction to AI",
//     description:
//       "A comprehensive guide to understanding artificial intelligence",
//     image: "/images/ml-logo.jpg",
//     date: "2024-01-15",
//   },
// };

// const page = () => {
//   // Get all files from content/ai directory
//   const aiDirectory = "app/content/ai";
//   const files = fs.readdirSync(aiDirectory);

//   // Get markdown files only and their metadata
//   const blogs = files
//     .filter((file) => file.endsWith(".md"))
//     .map((file) => {
//       const slug = file.replace(".md", "");
//       const metadata = blogMetadata[slug] || {};

//       return {
//         slug,
//         title: metadata.title || "Untitled",
//         description: metadata.description || "No description available",
//         image: metadata.image || "images/ai-logo.png",
//         date: metadata.date || "No date available"
//       };
//     });

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//       {blogs.map((blog) => (
//         <div key={blog.slug} className="card hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden">
//           <img
//             src={blog.image}
//             alt={blog.title}
//             className="w-full h-64 object-cover"
//           />
//           <div className="p-4">
//             <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
//             <p className="text-gray-400 text-sm mb-2">{blog.date}</p>
//             <p className="text-gray-600 line-clamp-3 mb-4">{blog.description}</p>
//             <Link href={`/blog/ai/${blog.slug}`}>
//               <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
//                 Read More
//               </button>
//             </Link>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default page;

const page = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto p-4">
        {/* Main heading for the blog section */}
        <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>

        {/* Grid layout for blog posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-card dark:bg-gray-800 hover:bg-card/80 rounded-lg p-6  transition-all duration-300 ease-in-out
                        hover:-translate-y-2 hover:shadow-xl
                        border border-border"
            >
              {/* Blog post image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover"
              />

              {/* Blog post content */}
              <div className="p-4">
                {/* Blog post title */}
                <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>

                {/* Blog post description */}
                <p className=" mb-4">{blog.description}</p>

                {/* Blog post author and date */}
                <div className="text-sm  mb-4">
                  <span>By {blog.author}</span> |{" "}
                  <span>
                    {new Date(blog.date).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>

                {/* Link to the full blog post */}
                <Link
                  href={`/blog//ai/${blog.slug}`}
                  className={`text-${
                    blog.color || "gray"
                  }-600 font-medium hover:text-${blog.color || "gray"}-500`}
                >
                  {blog.linkText || "Read More"} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
