import Link from 'next/link'
import { headers } from 'next/headers'
import { ArrowLeft } from 'lucide-react'
import { cn } from '@/lib/utils'

export default async function NotFound() {
    const headersList = await headers()
    const domain = headersList.get('host')

    return (
         <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="mb-8 max-w-md text-muted-foreground mx-auto">
          Don&apos;t worry, even the best data sometimes gets lost in the Internet.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className={cn(
              
                'rounded-md px-4 py-2 text-white bg-primary hover:bg-primary/80',
                'flex items-center justify-center transition-colors'
              
            )}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </div>
      </div>

      <footer className="mt-12 text-center text-sm text-muted-foreground">
        If you believe this is an error, please contact our support team.
      </footer>
    </div>
    )
}