import Navigation from '@/components/site/navigation'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import type {Metadata} from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "SoFLow | PM & CRM Tool",
    description: "OpenSourced Project Management and CRM Tool.",
  };

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider
      appearance={{baseTheme: dark}}
    >
      <main className='h-full'>
          <Navigation />
          {children}
      </main>
    </ClerkProvider>
  )
}

export default layout