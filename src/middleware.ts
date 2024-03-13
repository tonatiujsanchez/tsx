
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

const allowedOrigins = process.env.NODE_ENV === 'production' 
? [ 'https://tonatiuj-sanchez.vercel.app', 'https://tsx-dev.vercel.app' ]
: [ 'http://localhost:3000', 'http://127.0.0.1:5500' ]
 
const corsOptions = {
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

export async function middleware( req: NextRequest ) {

    const origin = req.headers.get('origin') ?? ''
    const isAllowedOrigin = allowedOrigins.includes(origin)
    
    // ===== ===== ===== ===== API PUBLIC ===== ===== ===== =====   
    if( req.nextUrl.pathname.startsWith('/api/public') ){

        // Handle preflighted requests
        const isPreflight = req.method === 'OPTIONS'
        
        if (isPreflight) {
            const preflightHeaders = {
            ...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
            ...corsOptions,
            }
            return NextResponse.json({}, { headers: preflightHeaders })
        }

        // Handle simple requests
        const response = NextResponse.next()
        console.log("/api/public => CORS", { isAllowedOrigin })

        if( isAllowedOrigin ){
            response.headers.set('Access-Control-Allow-Origin', origin)
        }

        Object.entries(corsOptions).forEach(([key, value]) => {
          response.headers.set(key, value)
        })
       
        return response
    }
}

export const config = {
    matcher: [
        '/api/public/:path*',
    ]
}