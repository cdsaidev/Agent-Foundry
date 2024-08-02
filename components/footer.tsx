import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return <div className="mt-[20svh] bg-muted">
    <Separator />
    <footer className="container mx-auto py-12 max-w-screen-lg">
      <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        <div className="flex flex-col gap-8 lg:col-span-2">
          <div className="space-y-4">
            <div>
              <Image src="/logo.png" alt="Agent Foundry" width={728} height={728} className="w-16 h-16" />
            </div>
            <p className="leading-7 text-muted-foreground">
              Create and install AI agents to automate your tasks.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="space-y-4">
            <Label>
              NAVIGATION
            </Label>
            <div className="flex flex-wrap gap-6 text-muted-foreground">
              <div className="flex flex-col gap-4">
                <Link href="/" className="underline underline-offset-4">
                  Home
                </Link>
                <Link href="/app" className="underline underline-offset-4">
                  Dashboard
                </Link>
                <Link href="/pricing" className="underline underline-offset-4">
                  Pricing
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                <Link href="/terms" className="underline underline-offset-4">
                  Terms of Service
                </Link>
                <Link href="/privacy" className="underline underline-offset-4">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="leading-7 text-muted-foreground text-center mt-16">
        © 2024 Agent Foundry. All rights reserved.
      </p>
      <p className="leading-7 text-muted-foreground text-center flex w-full justify-center gap-1.5 mt-2.5">
        Powered by <a href="https://www.cloudflare.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
          Cloudflare
        </a>
      </p>
    </footer>
  </div>
}
