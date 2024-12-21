import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Home() {
  const featuredBlogsPath = path.join(
    process.cwd(),
    "app/content/featured-blogs"
  );
  const featuredBlogs = fs
    .readdirSync(featuredBlogsPath)
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(featuredBlogsPath, filename);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);
      return {
        ...data,
        slug: data.slug,
      };
    });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Welcome to Imran Academy
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Tired of explanations that don't make sense? Want to learn tech the
            easy way? We got you!
          </p>
          <Link
            href="/blog"
            className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition"
          >
            Where can I start learning?
          </Link>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredBlogs.length > 0
            ? featuredBlogs.map((blog, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
                >
                  <div
                    className={`h-48 bg-${
                      blog.color || "gray"
                    }-100 rounded-lg mb-4 flex items-center justify-center`}
                  >
                    <svg
                      className={`w-20 h-20 text-${blog.color || "gray"}-500`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={
                          blog.icon ||
                          "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        }
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.description}</p>
                  {blog.slug && (
                    <Link
                      href={`/blog/content/featured-blogs/${blog.slug}`}
                      className={`text-${
                        blog.color || "gray"
                      }-600 font-medium hover:text-${blog.color || "gray"}-500`}
                    >
                      {blog.linkText || "Read More"} →
                    </Link>
                  )}
                </div>
              ))
            : null}

          {[...Array(3 - (featuredBlogs?.length || 0))].map((_, index) => (
            <div
              key={`placeholder-${index}`}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <svg
                  className="w-20 h-20 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Coming soon...</h3>
              <p className="text-gray-600 mb-4">New content is on the way</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
