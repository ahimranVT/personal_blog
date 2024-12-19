export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-12">
          <div className="flex flex-col items-center">
            <a
              href="mailto:imran18@purdue.edu"
              className="font-medium hover:text-indigo-400 transition-colors duration-300"
            >
              imran18@purdue.edu
            </a>
          </div>

          <div className="flex flex-col items-center">
            <a
              href="https://www.linkedin.com/in/abdul-hadi-i-182a8619b/"
              className="font-medium hover:text-indigo-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="flex flex-col items-center">
            <a
              href="https://abdulhadiimran.wixsite.com/abdul-hadi-imran-1"
              className="font-medium hover:text-indigo-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project Portfolio
            </a>
          </div>

          <div className="flex flex-col items-center">
            <p className="font-medium">+1 (765) 806-0906</p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Abdul Hadi Imran | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
