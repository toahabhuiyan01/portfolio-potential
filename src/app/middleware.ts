import { NextResponse, type NextRequest } from 'next/server'


export function middleware(req: NextRequest) {
    if(req.nextUrl.pathname === '/') {
        return NextResponse.redirect(new URL('/landing', req.url))
    }
}
