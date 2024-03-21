import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Paul Choi',
    default:
      'Paul Choi - Fullstack Software engineer, community leader, and amateur drummer',
  },
  description:
    "I'm Paul, a full-stack software engineer born and raised in Philadelphia, and I am actively seeking new opportunities. In the meantime, I'm currently in Lead Engineer positions at two local community-based non-profits as the Director of Digital Technologies and Lead Engineer at Metro, and as the Lead Frontend Engineer at Clean & Green Philly.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
