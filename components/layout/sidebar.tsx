"use client"

import React, { FC, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  CoinsIcon,
  HomeIcon,
  Layers2Icon,
  LucideIcon,
  ShieldCheckIcon,
  Menu,
} from 'lucide-react'

import { Logo } from '@/components/layout'
import { buttonVariants } from '@/components/ui/button'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'

import { SIDEBAR_ROUTES } from './sidebar-routes'

// -----------------------------------
// Komponen reusable SidebarLink
// -----------------------------------
const SidebarLink: FC<{
  route: SidebarRoute
  active: boolean
  onClick?: () => void
}> = ({ route, active, onClick }) => (
  <Link
    href={route.href}
    onClick={onClick}
    className={buttonVariants({
      variant: active ? 'sidebarActiveItem' : 'sidebarItem',
    })}
  >
    <route.icon size={20} className="mr-2" />
    {route.label}
  </Link>
)

// -----------------------------------
// Tipe data
// -----------------------------------
type SidebarRoute = {
  _id: number
  href: string
  label: string
  icon: LucideIcon
}

type Props = {
  onClick?: () => void
}

// -----------------------------------
// DesktopSidebar
// -----------------------------------
export const DesktopSidebar: FC<Props> = ({ onClick }) => {
  const pathname = usePathname()

  return (
    <div className="relative hidden h-screen w-full min-w-[280px] max-w-[280px] border-separate overflow-hidden border-r-2 bg-primary/5 text-muted-foreground dark:bg-secondary/30 dark:text-foreground md:block">
      <div className="border-separate gap-2 border-b-[1px] p-4 flex-center">
        <Logo />
      </div>

      <div className="flex flex-col p-2 space-y-1">
        {SIDEBAR_ROUTES.map((route) => {
          const active = pathname === route.href
          return (
            <SidebarLink
              key={route._id}
              route={route}
              active={active}
              onClick={onClick}
            />
          )
        })}
      </div>
    </div>
  )
}

// -----------------------------------
// MobileSidebar
// -----------------------------------
export const MobileSidebar: FC = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="md:hidden">
        <Menu className="h-6 w-6" />
      </SheetTrigger>

      <SheetContent side="left" className="w-[250px] p-4">
        <SheetHeader>
          <SheetTitle>
            <div className="flex items-center justify-between">
              <Logo />
            </div>
          </SheetTitle>
        </SheetHeader>
        
        <nav className="flex flex-col gap-2 mt-2">
          {SIDEBAR_ROUTES.map((route) => {
            const active = pathname === route.href
            return (
              <SidebarLink
                key={route._id}
                route={route}
                active={active}
                onClick={() => setOpen(false)}
              />
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
