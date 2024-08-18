import Cryptr from 'cryptr'

// Lazily construct Cryptr so importing this module never throws at build time
// (e.g. during `next build`, when SECRET is not present). The secret is only
// required when encryption/decryption is actually performed at runtime.
let instance: Cryptr | null = null

const getCryptr = (): Cryptr => {
  if (!instance) {
    const secret = process.env.SECRET
    if (!secret) {
      throw new Error('SECRET environment variable is not set')
    }
    instance = new Cryptr(secret)
  }
  return instance
}

export const cryptr = {
  encrypt: (value: string) => getCryptr().encrypt(value),
  decrypt: (value: string) => getCryptr().decrypt(value),
}
