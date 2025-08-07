// app/layout.tsx
import './globals.css'
import { ApolloProviderWrapper } from '@/lib/apolloClient'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ApolloProviderWrapper>{children}</ApolloProviderWrapper>
      </body>
    </html>
  )
}

