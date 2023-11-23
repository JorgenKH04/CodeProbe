import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CodeProbe - Get Github Stats',
  description: 'Get statistics of github users, repositories etc.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex justify-center'>
          <h1 className='text-[10em] text-[#a0d0ff]'>CodeProbe</h1>
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
