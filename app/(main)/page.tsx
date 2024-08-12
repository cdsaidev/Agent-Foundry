'use client'

import DotPattern from '@/components/magicui/dot-pattern'
import Marquee from '@/components/magicui/marquee'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { hit } from '@/lib/hit'
import { cn } from '@/lib/utils'
import { Agent } from '@prisma/client'
import { LucideArrowRight, LucideBot, LucideRocket } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

export default function Home() {
  const r = useRouter()
  const [agents, setAgents] = useState<Partial<Agent>[]>()

  const fetchAgents = useCallback(async () => {
    const resp = await hit('/api/agents/public')
    const json = await resp.json()
    setAgents(json)
  }, [])

  useEffect(() => {
    fetchAgents()
  }, [fetchAgents])

  return <div className="py-6">
    <div className="relative flex h-[65svh] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background container mx-auto max-w-3xl text-center">
      <div className="space-y-3 z-20">
        <Badge>
          Introducing Agent Studio ✨
        </Badge>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">
          No-Code AI Application Builder Platform
        </h1>
        <p className="leading-7 !mt-6 text-muted-foreground lg:text-xl">
          Create, publish, and install any LLM agent with <strong>Claude 3.5 Sonnet.</strong>
        </p>
        <div className="!mt-8 flex gap-1 items-center justify-center">
          <Button asChild size="lg">
            <Link href="/app">
              Get Started
              <LucideArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
        )}
      />
    </div>

    <div className="gap-4 py-12 flex justify-center text-center items-center flex-col">
      <p className="text-sm text-muted-foreground">
        Sponsored by
      </p>
      <div>
        <a href="https://sourcegraph.com/cody" target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer">
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Sourcegraph-logo-light.svg/1280px-Sourcegraph-logo-light.svg.png" width={1267} height={216} alt="sourcegraph" className="max-w-36" />
        </a>
      </div>
    </div>

    <div className="container mx-auto space-y-5 pt-[20svh] max-w-screen-2xl">
      <Marquee pauseOnHover className="[--duration:90s]">
        {(agents || [])?.map(agent => (
          <Card key={agent.id} className="hover:cursor-pointer" onClick={() => r.push('/app/store')}>
            <CardHeader>
              <div className="flex gap-4 flex-nowrap">
                {agent.logoUrl ? <Image src={agent.logoUrl} width={50} height={50} className="rounded-lg !size-12" alt={agent.name!} /> : <div className="!w-12 !h-12 flex items-center justify-center rounded-lg bg-muted">
                  <LucideBot className="h-6 w-6" />
                </div>}
                <div className="flex flex-col space-y-1.5 flex-1">
                  <CardTitle>{agent.name}</CardTitle>
                  <CardDescription className="line-clamp-2 min-h-[40px] max-w-60">{agent.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </Marquee>
      <Marquee pauseOnHover reverse className="[--duration:90s]">
        {(agents || [])?.map(agent => (
          <Card key={agent.id} className="hover:cursor-pointer" onClick={() => r.push('/app/store')}>
            <CardHeader>
              <div className="flex gap-4 flex-nowrap">
                {agent.logoUrl ? <Image src={agent.logoUrl} width={50} height={50} className="rounded-lg !size-12" alt={agent.name!} /> : <div className="!w-12 !h-12 flex items-center justify-center rounded-lg bg-muted">
                  <LucideBot className="h-6 w-6" />
                </div>}
                <div className="flex flex-col space-y-1.5 flex-1">
                  <CardTitle>{agent.name}</CardTitle>
                  <CardDescription className="line-clamp-2 min-h-[40px] max-w-60">{agent.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </Marquee>
    </div>

    <div className="container mx-auto pt-[10svh] text-center">
      <Button asChild size="lg" variant="default">
        <Link href="/app">
          Create Your First Agent
          <LucideRocket className="w-5 h-5 ml-2" />
        </Link>
      </Button>
    </div>
  </div>
}
