'use client'

import React, { useState } from 'react'
import Link from 'next/link'

type Community = {
  id: string
  name: string
  category: string
  description: string
  members: number
  skillLevel: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels'
  isLocal: boolean
  location?: string
}

const mockCommunities: Community[] = [
  {
    id: '1',
    name: 'React Developers Hub',
    category: 'Programming',
    description: 'A community for React developers to share knowledge, discuss best practices, and collaborate on projects.',
    members: 450,
    skillLevel: 'All Levels',
    isLocal: false,
  },
  {
    id: '2',
    name: 'Local Art Workshop',
    category: 'Design',
    description: 'Meet local artists, share techniques, and participate in weekly workshops and critiques.',
    members: 120,
    skillLevel: 'Intermediate',
    isLocal: true,
    location: 'New York, NY',
  },
  {
    id: '3',
    name: 'Music Production Lab',
    category: 'Audio',
    description: 'Collaborate with other producers, share samples, and get feedback on your tracks.',
    members: 280,
    skillLevel: 'All Levels',
    isLocal: false,
  },
]

export default function Communities() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCommunities = mockCommunities.filter(community =>
    community.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    community.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Skill Communities
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Join communities of passionate learners and mentors
          </p>
        </div>

        {/* Search */}
        <div className="mt-8 max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search communities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        {/* Communities Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCommunities.map(community => (
            <div
              key={community.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {community.name}
                  </h3>
                  <p className="mt-1 text-sm text-indigo-600">
                    {community.category}
                  </p>
                </div>
                {community.isLocal && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Local
                  </span>
                )}
              </div>
              
              <p className="mt-3 text-gray-600">
                {community.description}
              </p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  {community.skillLevel}
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                  {community.members} members
                </span>
                {community.location && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {community.location}
                  </span>
                )}
              </div>

              <div className="mt-6">
                <Link
                  href={`/communities/${community.id}`}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Join Community
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 