// app/about/page.js
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <header className="text-center mb-16 space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            About Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Learning has literally never been this easy
          </p>
          <p></p>
        </header>

        {/* Mission Statement */}
        <section className="mb-16">
          <div className="bg-white z-10 dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Imran Academy is a free, regularly maintained online blog that
              aims to make complex topics from different technical domains
              accessible and easy to learn.
            </p>
            <br />
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Each new blog will cover a single topic from a domain such as AI,
              Computer Science, or Data Engineering, going over the concepts and
              complexities of that topic in depth, but explaining them in a way
              that helps students connect the dots.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <img
                  src="/images/abdul-hadi-imran.png"
                  alt="Founder"
                  className="relative w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-700"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                  Abdul Hadi Imran
                </h3>
                <p className="text-lg text-blue-500 dark:text-blue-400 font-medium mb-4">
                  CEO & Founder
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Abdul Hadi Imran is a Master of Engineering Management student at Purdue University, with a background in 
                  AI, Databases, and Data Engineering
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Get in Touch
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                We'd love to hear from you! Reach out to us through any of these
                channels:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:contact@example.com"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
                >
                  Email Us
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                >
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
