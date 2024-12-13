import React from 'react'

const page = () => {
  return (
    <div>
      about
    </div>
  )
}

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
            Crafting digital experiences with passion and precision
          </p>
        </header>

        {/* Mission Statement */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Our Mission</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              We are passionate about creating innovative digital solutions that empower businesses 
              to thrive in the modern world. Through cutting-edge technology and creative thinking, 
              we transform ideas into reality.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.name}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 flex items-center justify-center">
                    <span className="text-2xl text-white font-bold">
                      {member.name[0]}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{member.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Get in Touch</h2>
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              We'd love to hear from you! Reach out to us through any of these channels:
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
        </section>
      </div>
    </main>
  );
}

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 15+ years of industry experience.'
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    bio: 'Tech innovator specializing in scalable architectures.'
  },
  {
    name: 'Mike Johnson',
    role: 'Lead Developer',
    bio: 'Full-stack expert with a passion for clean code.'
  },
  {
    name: 'Sarah Williams',
    role: 'Design Lead',
    bio: 'Creative director with an eye for detail and user experience.'
  }
];

// export default page
