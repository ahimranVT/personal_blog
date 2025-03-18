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
