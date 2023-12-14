/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
  webpack: (config, { webpack }) => {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    config.externals.push({
      sharp: "commonjs sharp",
      canvas: "commonjs canvas",
    })
    return config
  }
}

module.exports = nextConfig
