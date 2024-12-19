import Image from "next/image";
import Link from "next/link";

const BlogCategories = () => {
  const categories = [
    {
      title: "Programming and Algorithms",
      description:
        "Data Structures and Algorithms, General Programming Tips and Tricks",
      image: "images/programming-logo.jpg",
      slug: "/blog/prgm-algr",
    },
    {
      title: "Artificial Intelligence",
      description:
        "Generative AI, Heuristics, Bayesian Decision Theory   Prompt Engineering",
      image: "images/ai-logo.png",
      slug: "/blog/ai",
    },
    {
      title: "Machine Learning",
      description:
        "Topics in Supervised and Unsupervised Learning, MLOps, Model Optimization",
      image: "images/ml-logo.jpg",
      slug: "/blog/ml",
    },
    {
      title: "Data Engineering and Analytics",
      description: "Data Visualization, ETL/ELT, Data Warehousing, Databases",
      image: "images/data-analytics-logo.png",
      slug: "/blog/data-engr-anlt",
    },
  ];

  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        Get Started with...
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {categories.map((category) => (
          <Link
            href={category.slug}
            key={category.title}
            className="group block"
          >
            <div
              className="bg-card hover:bg-card/80 rounded-lg p-6 h-full
                        transform transition-all duration-300 ease-in-out
                        hover:-translate-y-2 hover:shadow-xl
                        border border-border"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
                style={{
                  width: "275px",
                  height: "200px",
                  objectFit: "cover", // Ensures proper scaling without distortion
                  borderRadius: "10px", // Optional: Adds rounded corners
                }}
              />
              <h3
                className="text-xl font-semibold mb-2 
                         group-hover:text-primary"
              >
                {category.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {category.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogCategories;
