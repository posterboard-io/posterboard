/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  experimental: {
    serverActions: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias.canvas = false
    config.resolve.alias.encoding = false
    return config
  },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
            port: '',
            pathname: '/u/**',
          },
          {
            protocol: 'https',
            hostname: 'images.ctfassets.net',
            port: '',
            pathname: '/i5wc420v2vd1/11e0YAu75XDfPHXMfz9mFN/f222a9c40f4d1c0a910006d7cd2d1849/Netflix_Symbol_RGB.png',
          },
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            port: '',
            pathname: '/a/**',
          },
          {
            protocol: 'https',
            hostname: 'www.nvidia.com',
            port: '',
            pathname: "/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/01-nvidia-logo-vert-500x200-2c50-l@2x.png"
          },
          {
            protocol: 'https',
            hostname: 'img-prod-cms-rt-microsoft-com.akamaized.net',
            port: '',
            pathname: "/cms/api/am/imageFileData/RE1Mu3b"
          }
        ],
    },
};

export default config;
