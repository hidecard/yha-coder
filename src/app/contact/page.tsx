'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-white" />,
      title: "Email Us",
      details: ["support@yha-computer.com", "info@yha-computer.com"],
      description: "Get in touch for technical support and general inquiries"
    },
    {
      icon: <Phone className="h-5 w-5 text-white" />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      description: "Monday to Friday, 9:00 AM - 6:00 PM EST"
    },
    {
      icon: <MapPin className="h-5 w-5 text-white" />,
      title: "Visit Us",
      details: ["123 Education Street", "Tech City, TC 12345"],
      description: "Stop by our office for in-person support"
    },
    {
      icon: <Clock className="h-5 w-5 text-white" />,
      title: "Office Hours",
      details: ["Mon-Fri: 9:00 AM - 6:00 PM", "Sat-Sun: 10:00 AM - 4:00 PM"],
      description: "We're here to help you succeed"
    }
  ]

  const faqs = [
    {
      question: "How do I start the coding test?",
      answer: "Simply click on 'Start Test' from the homepage. You'll need to complete a quick registration and then you can begin immediately."
    },
    {
      question: "Is the test really free?",
      answer: "Yes! The YHA Computer coding test is completely free for all students. No hidden charges or subscription fees."
    },
    {
      question: "How many questions are in the test?",
      answer: "The test contains 150 questions total - 50 PHP questions and 100 JavaScript questions, covering basic to intermediate topics."
    },
    {
      question: "Can I retake the test if I don't pass?",
      answer: "Absolutely! You can retake the test as many times as you need. We recommend reviewing your results and studying the explanations before retaking."
    },
    {
      question: "How long do I have to complete the test?",
      answer: "You have 30 minutes to complete the test. The timer starts as soon as you begin, so make sure you're ready!"
    },
    {
      question: "Will I receive a certificate?",
      answer: "Yes! Students who score 60% or higher receive a certificate of completion that you can download and share."
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
              <Link href="/about" className="text-gray-700 hover:text-orange-500 transition-all duration-300 font-medium hover:scale-105">About</Link>
              <Link href="/contact" className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6">
            <Mail className="h-6 w-6 text-orange-500" />
            <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Code Challenge Support</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-6">
            Get Help with
            <span className="text-orange-500"> Code Challenges</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have questions about our coding test? Need technical support?
            We're here to help you succeed in your programming journey.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm shadow-xl border border-white/20 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {info.icon}
                  </div>
                  <CardTitle className="text-lg text-gray-900">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-3">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="font-medium text-gray-800">{detail}</p>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-12">
            {/* FAQ Section */}
            <Card className="bg-white/70 backdrop-blur-sm shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Frequently Asked Questions</CardTitle>
                <CardDescription>
                  Quick answers to common questions about our coding test platform.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-[500px] overflow-y-auto">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                      <h4 className="font-semibold text-black mb-2">{faq.question}</h4>
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <Alert className="border-orange-200 bg-orange-50/80 backdrop-blur-sm shadow-lg">
            <Mail className="h-4 w-4 text-orange-600" />
            <AlertDescription className="text-orange-800">
              <strong>Need immediate help?</strong> For urgent technical issues during your test,
              email us at <strong>urgent@yha-computer.com</strong> and we'll respond within 2 hours.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-orange-500">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your Coding Journey?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Take the first step towards mastering PHP and JavaScript with our comprehensive test platform.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-orange-500 hover:bg-gray-100"
            onClick={() => window.location.href = '/test'}
          >
            Start the Test Now
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