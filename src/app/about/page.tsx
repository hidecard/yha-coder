'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Code, Target, Users, CheckCircle, ArrowRight, ChevronLeft, Zap, Award, Phone } from 'lucide-react'

export default function AboutPage() {
  const features = [
    {
      icon: <Code className="h-6 w-6 text-white" />,
      title: "Interactive Code Editor",
      description: "Write and test code with syntax highlighting, auto-completion, and real-time error checking."
    },
    {
      icon: <Target className="h-6 w-6 text-white" />,
      title: "Progressive Challenges",
      description: "Start with beginner-friendly problems and advance to expert-level coding challenges."
    },
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "Instant Feedback",
      description: "Get immediate results with detailed explanations and hints to improve your coding skills."
    },
    {
      icon: <Award className="h-6 w-6 text-white" />,
      title: "Skill Tracking",
      description: "Monitor your progress across different categories and difficulty levels."
    }
  ]

  const topics = [
    {
      category: "Challenge Categories",
      items: [
        "Algorithms & Data Structures",
        "Web Development",
        "Problem Solving",
        "String Manipulation",
        "File Operations",
        "API Integration"
      ]
    },
    {
      category: "Difficulty Levels",
      items: [
        "Beginner Friendly",
        "Intermediate Problems", 
        "Advanced Challenges",
        "Expert Level Tasks"
      ]
    }
  ]

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
              <Link href="/" className="text-gray-700 hover:text-orange-500 transition-all duration-300 font-medium hover:scale-105">Home</Link>
              <Link href="/challenges" className="text-gray-700 hover:text-orange-500 transition-all duration-300 font-medium hover:scale-105">Code Challenges</Link>
              <Link href="/quiz" className="text-gray-700 hover:text-orange-500 transition-all duration-300 font-medium hover:scale-105">Quiz</Link>
              <Link href="/about" className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-500 transition-all duration-300 font-medium hover:scale-105">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">
              About YHA Computer
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Empowering Students with
              <span className="text-orange-500"> Interactive Coding</span>
            </h2>
            <p className="text-xl text-gray-600">
              YHA Computer provides hands-on coding challenges with real-time feedback,
              helping students master PHP and JavaScript through practice and problem-solving.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">Our Mission</h3>
              <p className="text-lg text-gray-600 mb-4">
                We believe that every student can excel in programming with the right guidance
                and practice. Our mission is to provide a comprehensive testing platform that
                helps students identify their strengths and areas for improvement.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Through carefully crafted questions and immediate feedback, we create an
                environment where learning is continuous and measurable progress is achievable.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">150+ carefully curated questions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Instant feedback and explanations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Progress tracking and analytics</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/70 backdrop-blur-sm shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">50+</div>
                  <div className="text-gray-600">PHP Questions</div>
                </CardContent>
              </Card>
              <Card className="bg-white/70 backdrop-blur-sm shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent mb-2">100+</div>
                  <div className="text-gray-600">JavaScript Questions</div>
                </CardContent>
              </Card>
              <Card className="bg-white/70 backdrop-blur-sm shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">24/7</div>
                  <div className="text-gray-600">Available</div>
                </CardContent>
              </Card>
              <Card className="bg-white/70 backdrop-blur-sm shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">100%</div>
                  <div className="text-gray-600">Free</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">Why Choose YHA Computer?</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform is designed with student success in mind, providing the tools
              and resources needed to master programming concepts.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Covered */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">Topics We Cover</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive coverage of essential PHP and JavaScript concepts
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {topics.map((topic, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 flex items-center gap-2">
                    <Code className="h-5 w-5 text-orange-500" />
                    {topic.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {topic.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-orange-500">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Test Your Knowledge?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of students who are already improving their coding skills 
            with our comprehensive testing platform.
          </p>
          <Button
            size="lg"
            className="bg-white text-orange-500 hover:bg-gray-100"
            onClick={() => window.location.href = '/challenges'}
          >
            Start Your Test Now
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