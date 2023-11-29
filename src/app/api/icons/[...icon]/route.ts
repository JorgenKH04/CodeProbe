import { generateHexer } from '@/lib/generateHexer';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, context: { params: { icon: string[] } }) {
  const iconName: string = context.params.icon.join('/');

  const res = new NextResponse(generateHexer({ name: iconName }), { headers: { 'content-type': 'image/svg+xml' } });

  return res;
}
