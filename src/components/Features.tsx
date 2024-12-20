import React from 'react';
import { Shield, Code, Zap, Bot, Lock, RefreshCw } from 'lucide-react';

const features = [
  {
    name: 'AI-Powered Analysis',
    description: 'Advanced machine learning algorithms analyze your code in real-time for potential issues and improvements.',
    icon: Bot,
  },
  {
    name: 'Automated Security Fixes',
    description: 'Automatically detect and fix security vulnerabilities before they become problems.',
    icon: Shield,
  },
  {
    name: 'Code Quality Optimization',
    description: 'Improve code quality with intelligent suggestions and automated refactoring.',
    icon: Code,
  },
  {
    name: 'Real-time Performance',
    description: 'Lightning-fast analysis and fixes that keep up with your development pace.',
    icon: Zap,
  },
  {
    name: 'Enterprise Security',
    description: 'Bank-grade security measures to protect your intellectual property.',
    icon: Lock,
  },
  {
    name: 'Continuous Updates',
    description: 'Stay current with the latest security patches and coding best practices.',
    icon: RefreshCw,
  },
];

export default function Features() {
  return (
    <div id="features" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Better code, better security
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our comprehensive suite of tools helps you write better code and maintain robust security standards.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}