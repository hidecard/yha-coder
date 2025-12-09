'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Trophy, Medal, Award, Star, ChevronLeft, Users, Target, Clock } from 'lucide-react'

export default function LeaderboardPage() {
  const [leaderboardData, setLeaderboardData] = useState<any[]>([])
  const [stats, setStats] = useState({
    totalStudents: 0,
    averageScore: 0,
    highestScore: 0,
    averageTime: '00:00'
  })
  const [timeFilter, setTimeFilter] = useState<'all' | 'week' | 'month'>('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchLeaderboardData()
  }, [timeFilter])

  const fetchLeaderboardData = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/leaderboard?filter=${timeFilter}&limit=50`)
      const data = await response.json()
      
      if (data.success) {
        setLeaderboardData(data.leaderboard)
        setStats(data.stats)
      }
    } catch (error) {
      console.error('Error fetching leaderboard data:', error)
      // Use sample data as fallback
      setLeaderboardData([
        { rank: 1, name: "Alice Johnson", score: 95, total: 100, percentage: 95, time: "24:30", date: "2024-01-15" },
        { rank: 2, name: "Bob Smith", score: 92, total: 100, percentage: 92, time: "26:15", date: "2024-01-14" },
        { rank: 3, name: "Charlie Brown", score: 88, total: 100, percentage: 88, time: "28:45", date: "2024-01-13" },
        { rank: 4, name: "Diana Prince", score: 85, total: 100, percentage: 85, time: "25:20", date: "2024-01-12" },
        { rank: 5, name: "Edward Norton", score: 82, total: 100, percentage: 82, time: "27:30", date: "2024-01-11" }
      ])
      setStats({
        totalStudents: 247,
        averageScore: 78,
        highestScore: 95,
        averageTime: '26:30'
      })
    } finally {
      setLoading(false)
    }
  }

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-yellow-500" />
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />
      case 3:
        return <Award className="h-6 w-6 text-amber-600" />
      default:
        return <span className="text-lg font-bold text-gray-600">#{rank}</span>
    }
  }

  const getScoreColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600'
    if (percentage >= 80) return 'text-blue-600'
    if (percentage >= 70) return 'text-yellow-600'
    if (percentage >= 60) return 'text-orange-600'
    return 'text-red-600'
  }

  const getScoreBadge = (percentage: number) => {
    if (percentage >= 90) return 'bg-green-100 text-green-700'
    if (percentage >= 80) return 'bg-blue-100 text-blue-700'
    if (percentage >= 70) return 'bg-yellow-100 text-yellow-700'
    if (percentage >= 60) return 'bg-orange-100 text-orange-700'
    return 'bg-red-100 text-red-700'
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">Y</span>
              </div>
              <h1 className="text-2xl font-bold text-black">YHA Computer</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-black hover:text-orange-500 transition-colors">Home</Link>
              <Link href="/test" className="text-black hover:text-orange-500 transition-colors">Start Test</Link>
              <Link href="/leaderboard" className="text-orange-500 font-semibold">Leaderboard</Link>
              <Link href="/about" className="text-black hover:text-orange-500 transition-colors">About</Link>
              <Link href="/contact" className="text-black hover:text-orange-500 transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="h-8 w-8 text-orange-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-black">Leaderboard</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how you rank among other students. Compete, improve, and climb to the top!
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="border-black text-center">
              <CardContent className="pt-6">
                <Users className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-black">{loading ? '...' : stats.totalStudents}</div>
                <div className="text-gray-600">Total Students</div>
              </CardContent>
            </Card>
            <Card className="border-black text-center">
              <CardContent className="pt-6">
                <Target className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-black">{loading ? '...' : stats.averageScore}%</div>
                <div className="text-gray-600">Average Score</div>
              </CardContent>
            </Card>
            <Card className="border-black text-center">
              <CardContent className="pt-6">
                <Clock className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-black">{loading ? '...' : stats.averageTime}</div>
                <div className="text-gray-600">Avg. Time</div>
              </CardContent>
            </Card>
            <Card className="border-black text-center">
              <CardContent className="pt-6">
                <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-black">{loading ? '...' : stats.highestScore}%</div>
                <div className="text-gray-600">Highest Score</div>
              </CardContent>
            </Card>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-6">
            <div className="bg-gray-100 rounded-lg p-1 inline-flex">
              <Button
                variant={timeFilter === 'all' ? 'default' : 'ghost'}
                size="sm"
                className={timeFilter === 'all' ? 'bg-orange-500 text-white' : 'text-gray-600 hover:text-black'}
                onClick={() => setTimeFilter('all')}
              >
                All Time
              </Button>
              <Button
                variant={timeFilter === 'month' ? 'default' : 'ghost'}
                size="sm"
                className={timeFilter === 'month' ? 'bg-orange-500 text-white' : 'text-gray-600 hover:text-black'}
                onClick={() => setTimeFilter('month')}
              >
                This Month
              </Button>
              <Button
                variant={timeFilter === 'week' ? 'default' : 'ghost'}
                size="sm"
                className={timeFilter === 'week' ? 'bg-orange-500 text-white' : 'text-gray-600 hover:text-black'}
                onClick={() => setTimeFilter('week')}
              >
                This Week
              </Button>
            </div>
          </div>

          {/* Leaderboard Table */}
          <Card className="border-black">
            <CardHeader>
              <CardTitle className="text-xl text-black flex items-center gap-2">
                <Trophy className="h-5 w-5 text-orange-500" />
                Top Performers
              </CardTitle>
              <CardDescription>
                Students with the highest scores in the YHA Computer coding test
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {leaderboardData.map((student) => (
                  <div
                    key={student.rank}
                    className={`flex items-center justify-between p-4 rounded-lg border ${
                      student.rank <= 3 
                        ? 'border-orange-200 bg-orange-50' 
                        : 'border-gray-200 bg-white'
                    } hover:shadow-md transition-shadow`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12">
                        {getRankIcon(student.rank)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-black">{student.name}</h3>
                        <p className="text-sm text-gray-600">Completed on {student.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className={`text-lg font-bold ${getScoreColor(student.percentage)}`}>
                          {student.score}/{student.total}
                        </div>
                        <Badge className={getScoreBadge(student.percentage)}>
                          {student.percentage}%
                        </Badge>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-600">Time</div>
                        <div className="font-semibold text-black">{student.time}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-orange-500">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Think you can beat the top scores?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Take the coding test now and see where you stand on the leaderboard. 
            Practice makes perfect!
          </p>
          <Button 
            size="lg" 
            className="bg-white text-orange-500 hover:bg-gray-100"
            onClick={() => window.location.href = '/test'}
          >
            Take the Test
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">Y</span>
            </div>
            <span className="font-bold text-lg">YHA Computer</span>
          </div>
          <p className="text-gray-400">
            © 2024 YHA Computer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}