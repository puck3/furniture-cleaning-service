/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://furniture-cleaning-service.vercel.app/",
  generateRobotsTxt: true,
  exclude: ["/api/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api"],
      },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
      `${process.env.NEXT_PUBLIC_SITE_URL}/server-sitemap.xml`,
    ],
  },
};

module.exports = config;
