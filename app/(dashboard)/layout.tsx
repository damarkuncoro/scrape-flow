'use client'

import BreadcrumbHeader from '@/components/layout/breadcrumb-header'
import { ModeToggle } from '@/components/layout/mode-toogle'
import { DesktopSidebar, MobileSidebar } from '@/components/layout/sidebar'
import { Separator } from '@/components/ui/separator'
import { SignedOut, SignInButton, SignUpButton, SignedIn, UserButton } from '@clerk/nextjs'
import React from 'react'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar Desktop */}
      <DesktopSidebar />

      <div className="flex flex-col flex-1 min-h-screen">
        {/* Header */}
        <header className="flex items-center justify-between px-4 py-3 h-[50px] border-b">
          <div className="flex items-center gap-2">
            <MobileSidebar />
            <BreadcrumbHeader />
            
            
          </div>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>

        <Separator />

        {/* Content */}
        <main className="overflow-auto flex-1 container py-4 text-accent-foreground">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
