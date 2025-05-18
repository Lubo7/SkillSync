import React from 'react'

const features = [
  {
    title: 'AI-Powered Matching',
    description: 'Our intelligent system analyzes your learning style, goals, and preferences to connect you with the perfect mentor or student. Get personalized recommendations based on your unique needs.',
    icon: (
      <svg className="w-12 h-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Interactive Learning Spaces',
    description: 'Collaborate in real-time using our suite of tools including video chat, shared whiteboards, and specialized learning environments tailored to your specific skill.',
    icon: (
      <svg className="w-12 h-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Micro-Communities',
    description: 'Join focused groups of learners and mentors who share your specific interests. Build connections, share resources, and grow together in a supportive environment.',
    icon: (
      <svg className="w-12 h-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
]

const steps = [
  {
    number: 1,
    title: 'Create Your Profile',
    description: 'Sign up and tell us about your learning goals, interests, and preferred learning style. Our AI will use this information to personalize your experience.',
  },
  {
    number: 2,
    title: 'Discover Skills & Communities',
    description: 'Browse our curated selection of skills and join micro-communities that match your interests. Connect with mentors and fellow learners.',
  },
  {
    number: 3,
    title: 'Start Learning',
    description: 'Engage in interactive learning sessions, collaborate on projects, and track your progress. Get feedback and support from your mentor and community.',
  },
  {
    number: 4,
    title: 'Share Your Knowledge',
    description: 'As you grow, start sharing your expertise with others. Become a mentor and help build a supportive learning ecosystem.',
  },
]

export default function HowItWorks() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            How SkillSync Works
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform combines AI-powered matching, interactive learning tools, and supportive communities
            to create the most effective skill-sharing experience.
          </p>
        </div>

        {/* Features Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Key Features
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="relative bg-white p-8 rounded-lg shadow-sm">
                <div className="absolute top-8 left-8">
                  {feature.icon}
                </div>
                <div className="mt-20">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works Steps */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Getting Started
          </h2>
          <div className="mt-12 relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-12 left-16 right-16 h-0.5 bg-gray-200" />
            
            <div className="grid gap-12 lg:grid-cols-4">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto bg-indigo-600 rounded-full text-white text-xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-gray-900 text-center">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-center">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 