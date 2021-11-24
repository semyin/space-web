/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    const isDev = process.env.NEXT_PUBLIC_APP_ENV === 'dev'
    const apiDomain = isDev ? 'http://localhost:5735/' : 'http://localhost:5735/'
    return [
      {
        source: '/api/:path*',
        destination: `${apiDomain}:path*`
      }
    ]
  }
}
