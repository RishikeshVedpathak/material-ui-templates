module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/templates',
        destination: '/templates/login',
        permanent: true
      },
    ]
  },
}
