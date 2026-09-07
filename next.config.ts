import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/quote",
        destination: "/get-a-quote",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/get-a-quote",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/plantation-shutter-repair",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/",
        permanent: true,
      },
      {
        source: "/shutters-in-southern-california",
        destination: "/plantation-shutter-repair",
        permanent: true,
      },
      {
        source: "/a-homeowners-guide-to-buying-window-treatments",
        destination: "/plantation-shutter-repair",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
