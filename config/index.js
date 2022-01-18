const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://vercel-demo-daouv7odv-akshatsharma-98.vercel.app/'