import { NextRequest, NextResponse } from 'next/server'

// In-memory storage for demo purposes (in production, use a database)
const testResults: any[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const requiredFields = ['studentName', 'score', 'totalQuestions', 'timeTaken', 'answers']
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Create result entry
    const result = {
      id: Date.now().toString(),
      studentName: body.studentName,
      email: body.email || '',
      score: body.score,
      totalQuestions: body.totalQuestions,
      percentage: Math.round((body.score / body.totalQuestions) * 100),
      timeTaken: body.timeTaken,
      answers: body.answers,
      passed: (body.score / body.totalQuestions) >= 0.6,
      timestamp: new Date().toISOString(),
      date: new Date().toLocaleDateString()
    }

    // Store result
    testResults.push(result)

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Test results saved successfully',
      result: {
        id: result.id,
        studentName: result.studentName,
        score: result.score,
        totalQuestions: result.totalQuestions,
        percentage: result.percentage,
        passed: result.passed,
        timestamp: result.timestamp
      }
    })

  } catch (error) {
    console.error('Error saving test results:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // Sort results by score (highest first) and then by timestamp (most recent first)
    const sortedResults = testResults.sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score
      }
      return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    })

    // Add rank to each result
    const rankedResults = sortedResults.map((result, index) => ({
      ...result,
      rank: index + 1
    }))

    return NextResponse.json({
      success: true,
      results: rankedResults,
      total: rankedResults.length
    })

  } catch (error) {
    console.error('Error fetching test results:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}