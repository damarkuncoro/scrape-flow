// sidebar-routes.ts
import { HomeIcon, Layers2Icon, ShieldCheckIcon, CoinsIcon } from 'lucide-react'

export const SIDEBAR_ROUTES = [
  { _id: 1, href: '/', label: 'Home', icon: HomeIcon },
  { _id: 2, href: '/workflows', label: 'Workflows', icon: Layers2Icon },
  { _id: 3, href: '/credentials', label: 'Credentials', icon: ShieldCheckIcon },
  { _id: 4, href: '/billing', label: 'Billing', icon: CoinsIcon }
]
