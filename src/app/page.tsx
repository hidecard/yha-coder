'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock, Trophy, Users, BookOpen, Play, BarChart3, Award, Phone, Code, Target, Zap } from 'lucide-react'

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)

  const handleStartTest = () => {
    setIsLoading(true)
    // Navigate to test page
    window.location.href = '/test'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">Y</span>
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">YHA Computer</h1>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">Home</Link>
              <Link href="/challenges" className="text-gray-700 hover:text-orange-500 transition-all duration-300 font-medium hover:scale-105">Code Challenges</Link>
              <Link href="/quiz" className="text-gray-700 hover:text-orange-500 transition-all duration-300 font-medium hover:scale-105">Quiz</Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-500 transition-all duration-300 font-medium hover:scale-105">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-500 transition-all duration-300 font-medium hover:scale-105">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6">
              <Code className="h-6 w-6 text-orange-500" />
              <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Interactive Learning Platform</span>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-6">Master Programming with</h1>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent mb-6">Code Challenges & Quiz</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">Practice PHP and JavaScript coding with interactive challenges and quizzes, real-time feedback, and progressive difficulty levels.</p>
          </div>

          {/* Language Selection */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div
              onClick={() => window.location.href = '/challenges'}
              className="relative overflow-hidden rounded-2xl p-8 cursor-pointer transition-all duration-500 transform hover:scale-105 bg-white/70 backdrop-blur-sm hover:bg-white/90 shadow-xl hover:shadow-2xl"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Code Challenges</h3>
                    <p className="text-sm text-gray-600">Interactive Programming</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-gray-700">
                  Challenge yourself with PHP and JavaScript coding problems. Write, test, and debug your code with instant feedback.
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-50"></div>
            </div>

            <div
              onClick={() => window.location.href = '/quiz'}
              className="relative overflow-hidden rounded-2xl p-8 cursor-pointer transition-all duration-500 transform hover:scale-105 bg-white/70 backdrop-blur-sm hover:bg-white/90 shadow-xl hover:shadow-2xl"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r from-yellow-400 to-orange-500">
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Quiz</h3>
                    <p className="text-sm text-gray-600">Test Your Knowledge</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-gray-700">
                  Take comprehensive quizzes on PHP and JavaScript fundamentals with timed sessions and detailed results.
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 opacity-50"></div>
            </div>
          </div>
        </div>
      </main>

          {/* Features Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
                  Features & Benefits
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Discover the powerful features that make YHA Computer the perfect platform for your coding journey
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-white/70 backdrop-blur-sm shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-gray-900">150+ Questions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      Comprehensive test bank with 50 PHP questions and 100 JavaScript questions covering basic to intermediate topics.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 backdrop-blur-sm shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-gray-900">Timed Tests</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      Built-in countdown timer with options for 15 or 30-minute test sessions to simulate real exam conditions.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 backdrop-blur-sm shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <BarChart3 className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-gray-900">Instant Results</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      Get immediate feedback with detailed explanations for wrong answers and comprehensive score breakdown.
                    </CardDescription>
                  </CardContent>
                </Card>


              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                <Card className="bg-white/70 backdrop-blur-sm shadow-xl border border-white/20 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <CardContent className="pt-8">
                    <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">∞</div>
                    <div className="text-gray-600">Unlimited Challenges</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/70 backdrop-blur-sm shadow-xl border border-white/20 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <CardContent className="pt-8">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">2</div>
                    <div className="text-gray-600">Languages</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/70 backdrop-blur-sm shadow-xl border border-white/20 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <CardContent className="pt-8">
                    <div className="text-4xl font-bold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent mb-2">5+</div>
                    <div className="text-gray-600">Difficulty Levels</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/70 backdrop-blur-sm shadow-xl border border-white/20 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <CardContent className="pt-8">
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">24/7</div>
                    <div className="text-gray-600">Available</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-orange-500">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Start Coding?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Practice PHP and JavaScript with interactive challenges and improve your programming skills.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-orange-500 hover:bg-gray-100"
            onClick={() => window.location.href = '/challenges'}
          >
            Start Coding Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">Y</span>
                </div>
                <span className="font-bold text-lg">YHA Computer</span>
              </div>
              <p className="text-gray-400">
                Interactive coding challenge platform for students to master PHP and JavaScript.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/challenges" className="hover:text-white transition-colors">Code Challenges</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Challenge Topics</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Algorithms & Data Structures</li>
                <li>Web Development</li>
                <li>Problem Solving</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>Get in Touch</span>
              </div>
              <p className="text-gray-400 mt-2">
                Need help? Reach out to our support team.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 YHA Computer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}