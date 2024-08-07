import { prisma } from '@/lib/db'

// Single-user mode: there is no login. Every request runs as one local user,
// auto-provisioned on first use. Override the identity via env if desired.
const LOCAL_USER_EMAIL = process.env.LOCAL_USER_EMAIL || 'local@agent-foundry.local'
const LOCAL_USER_NAME = process.env.LOCAL_USER_NAME || 'Local User'

export type AuthUser = {
  id: string,
  email: string,
  name?: string | null,
  credits: number,
  isSuperAdmin?: boolean,
  profile?: {
    email: string
    name: string
    picture?: string
  }
}

export type ReqWithUser = Request & {
  user: AuthUser
}

const getLocalUser = async (): Promise<AuthUser> => {
  const user = await prisma.user.upsert({
    select: {
      id: true,
      email: true,
      name: true,
      credits: true
    },
    where: {
      email: LOCAL_USER_EMAIL
    },
    update: {},
    create: {
      email: LOCAL_USER_EMAIL,
      name: LOCAL_USER_NAME
    }
  })

  return {
    ...user,
    isSuperAdmin: true,
    profile: {
      email: user.email,
      name: user.name || LOCAL_USER_NAME
    }
  }
}

export const authorization = (handler: (req: ReqWithUser, params?: any) => void | Promise<void> | Response | Promise<Response>) => {
  return async (req: ReqWithUser, params?: any) => {
    req.user = await getLocalUser()
    return await handler(req, params)
  }
}
