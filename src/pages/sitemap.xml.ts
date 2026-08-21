import type { APIRoute } from "astro";

export const prerender = true;

const staticPaths = [
  "/",
  "/minimal",
  "/privacy",
  "/thanks",
  "/projects/scentance",
  "/projects/stock-salt",
  "/projects/office-pal",
  "/projects/speehive-social",
  "/projects/expence-hive",
];

export const GET: APIRoute = ({ site }) => {
  const base =
    site?.toString().replace(/\/$/, "") ?? "https://shameel.barchy.online";
  const urls = staticPaths
    .map(
      (p) =>
        `  <url><loc>${base}${p}</loc><changefreq>weekly</changefreq><priority>${p === "/" ? "1.0" : "0.7"}</priority></url>`,
    )
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "max-age=3600",
    },
  });
};
