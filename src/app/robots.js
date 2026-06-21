export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://portfolio-nicolas-sigma.vercel.app/sitemap.xml",
  };
}