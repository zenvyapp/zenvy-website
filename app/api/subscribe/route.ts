import { NextRequest, NextResponse } from 'next/server'

// Cache for SendGrid list ID (in-memory cache, resets on server restart)
let cachedListId: string | null = null
let listIdCacheTimestamp: number = 0
const CACHE_TTL = 1000 * 60 * 60 // 1 hour in milliseconds

// Helper function to find list ID by name with caching
async function findListIdByName(listName: string): Promise<string | null> {
  // Return cached value if still valid
  if (cachedListId && Date.now() - listIdCacheTimestamp < CACHE_TTL) {
    return cachedListId
  }

  try {
    const response = await fetch('https://api.sendgrid.com/v3/marketing/lists', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      console.error('Failed to fetch lists from SendGrid')
      // Return cached value even if expired if fetch fails
      return cachedListId
    }

    const data = await response.json()
    const lists = data.result || []
    
    // Find the list with matching name (case-insensitive)
    const list = lists.find((l: any) => 
      l.name && l.name.toLowerCase() === listName.toLowerCase()
    )
    
    const listId = list ? list.id : null
    
    // Cache the result
    if (listId) {
      cachedListId = listId
      listIdCacheTimestamp = Date.now()
    }
    
    return listId
  } catch (error) {
    console.error('Error fetching lists:', error)
    // Return cached value even if expired if fetch fails
    return cachedListId
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Check if SendGrid API key is configured
    if (!process.env.SENDGRID_API_KEY) {
      console.error('SENDGRID_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Get the list ID - only based on list name "Newsletter"
    const sendGridListId = await findListIdByName('Newsletter')
    
    if (!sendGridListId) {
      return NextResponse.json(
        { error: 'Newsletter list not found' },
        { status: 404 }
      )
    }

    // Add contact to SendGrid Marketing Contacts
    // Using SendGrid Marketing API v3
    const response = await fetch('https://api.sendgrid.com/v3/marketing/contacts', {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contacts: [
          {
            email: email,
          }
        ],
        list_ids: [sendGridListId],
      }),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('SendGrid API error:', errorData)
      return NextResponse.json(
        { error: 'Failed to subscribe to mailing list' },
        { status: response.status }
      )
    }

    const data = await response.json()
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully subscribed to mailing list',
        data: data
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error subscribing to mailing list:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

