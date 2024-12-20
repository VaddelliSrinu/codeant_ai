import React from 'react';
import { ArrowRight } from 'lucide-react';

const positions = [
  {
    title: 'Frontend Developer Intern',
    type: 'Internship',
    location: 'Remote',
    description: 'Join us in building intuitive user interfaces for our cutting-edge products.',
  },
  {
    title: 'Backend Developer',
    type: 'Full-time',
    location: 'San Francisco, CA',
    description: 'Help us scale our AI-powered code analysis engine.',
  },
  {
    title: 'ML Engineer',
    type: 'Full-time',
    location: 'Remote',
    description: 'Improve our AI models for code analysis and automated fixes.',
  },
];

export default function Careers() {
  return (
    <div id="careers" className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Join Our Team</h2>
          <p className="mt-4 text-lg text-gray-500">
            Help us shape the future of code quality and security
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {positions.map((position) => (
            <div
              key={position.title}
              className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">{position.title}</h3>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    {position.type}
                  </span>
                  <span className="ml-2">{position.location}</span>
                </div>
                <p className="mt-4 text-gray-500">{position.description}</p>
                <div className="mt-4">
                  <button className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}