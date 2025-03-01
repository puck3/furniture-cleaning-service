const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://furniture-cleaning-service.vercel.app";

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: `${siteUrl}/`,
  generateRobotsTxt: true,
  exclude: ["/api/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api",
      },
    ],
  },
};

module.exports = config;
