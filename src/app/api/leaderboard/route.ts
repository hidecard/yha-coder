import { NextRequest, NextResponse } from 'next/server'

// In-memory storage for demo purposes (in production, use a database)
const testResults: any[] = []

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const timeFilter = searchParams.get('filter') || 'all'
    const limit = parseInt(searchParams.get('limit') || '50')

    // Filter results based on time
    const now = new Date()
    let filteredResults = [...testResults]

    if (timeFilter === 'week') {
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
      filteredResults = testResults.filter(result => 
        new Date(result.timestamp) >= weekAgo
      )
    } else if (timeFilter === 'month') {
      const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
      filteredResults = testResults.filter(result => 
        new Date(result.timestamp) >= monthAgo
      )
    }

    // Sort by score (highest first), then by time taken (fastest first)
    const sortedResults = filteredResults.sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score
      }
      // If scores are equal, faster time gets higher rank
      return a.timeTaken.localeCompare(b.timeTaken)
    })

    // Limit results and add rank
    const limitedResults = sortedResults.slice(0, limit).map((result, index) => ({
      rank: index + 1,
      name: result.studentName,
      score: result.score,
      total: result.totalQuestions,
      percentage: result.percentage,
      time: result.timeTaken,
      date: result.date,
      passed: result.passed
    }))

    // Calculate statistics
    const stats = {
      totalStudents: testResults.length,
      averageScore: testResults.length > 0 
        ? Math.round(testResults.reduce((sum, r) => sum + r.percentage, 0) / testResults.length)
        : 0,
      highestScore: testResults.length > 0 
        ? Math.max(...testResults.map(r => r.percentage))
        : 0,
      averageTime: testResults.length > 0 
        ? calculateAverageTime(testResults.map(r => r.timeTaken))
        : '00:00'
    }

    return NextResponse.json({
      success: true,
      leaderboard: limitedResults,
      stats,
      filter: timeFilter,
      total: limitedResults.length
    })

  } catch (error) {
    console.error('Error fetching leaderboard:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Helper function to calculate average time
function calculateAverageTime(times: string[]): string {
  if (times.length === 0) return '00:00'
  
  const totalSeconds = times.reduce((sum, time) => {
    const [minutes, seconds] = time.split(':').map(Number)
    return sum + (minutes * 60 + seconds)
  }, 0)
  
  const avgSeconds = Math.round(totalSeconds / times.length)
  const avgMinutes = Math.floor(avgSeconds / 60)
  const remainingSeconds = avgSeconds % 60
  
  return `${avgMinutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
}