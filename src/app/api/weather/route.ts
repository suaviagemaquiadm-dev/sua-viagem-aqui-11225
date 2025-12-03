import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const location = searchParams.get('location');

  if (!location) {
    return NextResponse.json({ error: 'Location is required' }, { status: 400 });
  }

  try {
    const weatherResponse = await fetch(`https://wttr.in/${location}?format=j1`, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'SuaViagemAqui-App'
      },
      // Add a reasonable timeout
      signal: AbortSignal.timeout(8000) // 8 seconds
    });

    if (!weatherResponse.ok) {
      // Don't try to parse JSON on error, as wttr.in might send plain text
      const errorText = await weatherResponse.text();
      console.error(`Error from wttr.in API: ${weatherResponse.status}`, errorText);
      return NextResponse.json({ error: `Failed to fetch weather data. Status: ${weatherResponse.status}` }, { status: 502 }); // Bad Gateway
    }

    const data = await weatherResponse.json();
    return NextResponse.json(data);

  } catch (error: any) {
    console.error('Proxy error in /api/weather:', error);
    
    // Check if it's a timeout error
    if (error.name === 'AbortError') {
       return NextResponse.json({ error: 'Request to weather service timed out.' }, { status: 504 }); // Gateway Timeout
    }
    
    // For other generic errors (like the SocketError), return a generic server error
    return NextResponse.json({ error: 'Internal server error while fetching weather.' }, { status: 500 });
  }
}
