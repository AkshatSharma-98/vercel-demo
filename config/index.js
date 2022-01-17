const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://vercel-demo-1px4e70tp-akshatsharma-98.vercel.app'