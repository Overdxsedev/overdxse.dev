export async function POST(request) {
  try {
    const { name, email, message } = await request.json()

    // Validate input
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Here you can add your email service integration
    // For now, just acknowledge the message
    console.log('Contact form submission:', { name, email, message })

    return Response.json(
      { success: true, message: 'Message received!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
