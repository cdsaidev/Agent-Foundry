export const hit = async (url: string, init?: RequestInit) => {
  return await fetch(url.startsWith('http') ? url : `${
    process.env.NEXT_PUBLIC_API_URL || ''}${url}`, {
    ...init,
    headers: {
      ...init?.headers,
    },
    credentials: 'include'
  })
}
