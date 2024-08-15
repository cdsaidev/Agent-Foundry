import { NextResponse } from 'next/server'

export const GET = () => NextResponse.json({ status: 'live' })

export const dynamic = 'force-dynamic'
