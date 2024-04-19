/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      NEXT_APP_ENVIRONMENT: process.env.NEXT_APP_ENVIRONMENT,
      NEXT_APP_BASE_URL: process.env.NEXT_APP_BASE_URL,
    },
    future: { webpack5: true },
};

export default nextConfig;
