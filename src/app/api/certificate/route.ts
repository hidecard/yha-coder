import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const requiredFields = ['studentName', 'score', 'totalQuestions', 'testDate']
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    const percentage = Math.round((body.score / body.totalQuestions) * 100)
    
    // Check if student passed (60% or higher)
    if (percentage < 60) {
      return NextResponse.json(
        { error: 'Certificate not available. Minimum 60% score required.' },
        { status: 400 }
      )
    }

    // Generate certificate data
    const certificate = {
      id: `CERT-${Date.now()}`,
      studentName: body.studentName,
      email: body.email || '',
      score: body.score,
      totalQuestions: body.totalQuestions,
      percentage: percentage,
      testDate: body.testDate,
      issuedDate: new Date().toLocaleDateString(),
      certificateId: `YHA-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      verificationUrl: `https://yha-computer.com/verify/${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    }

    // In a real application, you would:
    // 1. Save certificate to database
    // 2. Generate PDF certificate
    // 3. Send email with certificate
    // 4. Store verification record

    return NextResponse.json({
      success: true,
      message: 'Certificate generated successfully',
      certificate: {
        id: certificate.id,
        studentName: certificate.studentName,
        percentage: certificate.percentage,
        issuedDate: certificate.issuedDate,
        certificateId: certificate.certificateId,
        verificationUrl: certificate.verificationUrl
      }
    })

  } catch (error) {
    console.error('Error generating certificate:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const certificateId = searchParams.get('id')

    if (!certificateId) {
      return NextResponse.json(
        { error: 'Certificate ID is required' },
        { status: 400 }
      )
    }

    // In a real application, you would fetch from database
    // For demo, return mock verification data
    const mockCertificate = {
      id: certificateId,
      studentName: "Demo Student",
      percentage: 85,
      issuedDate: "2024-01-15",
      verified: true,
      status: "valid"
    }

    return NextResponse.json({
      success: true,
      certificate: mockCertificate
    })

  } catch (error) {
    console.error('Error verifying certificate:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}