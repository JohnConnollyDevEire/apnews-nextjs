import path from 'path'

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },

  /* config options here */
  webpack: (config) => {
    config.module.rules.push({
      test: /\.gql$/,
      exclude: /node_modules/,
      use: {
        loader: 'graphql-tag/loader',
      },
    })
    return config
  },

  sassOptions: {
    includePaths: [path.join(__dirname, 'sass')],
    // TODO: track below deprecation issue: https://github.com/sass/dart-sass/issues/2352
    silenceDeprecations: ['legacy-js-api'],
  },

  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'dims.apnews.com',
      },
    ],
  },
}

export default nextConfig
