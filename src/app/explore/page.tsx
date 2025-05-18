'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Skill = {
  id: string
  title: string
  category: string
  description: string
  mentors: number
  learners: number
  rating: number
}

const mockSkills: Skill[] = [
  {
    id: '1',
    title: 'Web Development',
    category: 'Programming',
    description: 'Learn modern web development with React, Next.js, and Node.js',
    mentors: 45,
    learners: 1200,
    rating: 4.8,
  },
  {
    id: '2',
    title: 'Digital Illustration',
    category: 'Design',
    description: 'Master digital art techniques using industry-standard tools',
    mentors: 32,
    learners: 850,
    rating: 4.7,
  },
  {
    id: '3',
    title: 'Music Production',
    category: 'Audio',
    description: 'Create professional music using DAWs and virtual instruments',
    mentors: 28,
    learners: 670,
    rating: 4.9,
  },
]

const categories = [
  'All Categories',
  'Programming',
  'Design',
  'Audio',
  'Business',
  'Marketing',
  'Language',
]

export default function Explore() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredSkills = mockSkills.filter(skill => {
    const matchesCategory = selectedCategory === 'All Categories' || skill.category === selectedCategory
    const matchesSearch = skill.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         skill.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Explore Skills
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Discover new skills and connect with expert mentors
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="category-select" className="sr-only">Select category</label>
            <select
              id="category-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="rounded-md border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:ring-indigo-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map(skill => (
            <Link 
              key={skill.id}
              href={`/skills/${skill.id}`}
              className="block group"
            >
              <div className="relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600">
                      {skill.title}
                    </h3>
                    <p className="mt-1 text-sm text-indigo-600">
                      {skill.category}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-sm font-medium text-gray-600">{skill.rating}</span>
                  </div>
                </div>
                <p className="mt-3 text-gray-600">
                  {skill.description}
                </p>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <span className="mr-4">
                    {skill.mentors} mentors
                  </span>
                  <span>
                    {skill.learners} learners
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 