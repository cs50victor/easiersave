const defaultTitle = "easiersave"
const titleTemplate = "%s - easiersave."
const description = "An online video downloader."
const link = "https://easiersave.vercel.app"

const SEO = {
  defaultTitle,
  titleTemplate,
  description,
  canonical: link,
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: link,
    site_name: defaultTitle,
    description,
    images: [
      {
        url: "/static/og.jpg",
        alt: defaultTitle,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: "@vic8or",
    site: "@vic8or",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "preload",
      href: "/fonts/inter-var-roman.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
    {
      rel: "preload",
      href: "/fonts/Radial-Bold.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
    {
      rel: "preload",
      href: "/fonts/Radial-Regular.woff",
      as: "font",
      type: "font/woff",
      crossOrigin: "anonymous",
    },
    {
      rel: "apple-touch-icon",
      href: "/favicon/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "icon",
      href: "/favicon/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      rel: "icon",
      href: "/favicon/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      rel: "shortcut icon",
      href: "/favicon/favicon.ico",
    },
    {
      rel: "icon shortcut",
      type: "image/x-icon",
      href: "/favicon/favicon.ico",
    },
    {
      rel: "mask-icon",
      href: "/favicon/safari-pinned-tab.svg",
      color: "#000000",
    },
    {
      rel: "manifest",
      href: "/favicon/site.webmanifest",
    },
  ],
  additionalMetaTags: [
    {
      name: "viewport",
      content:
        "minimum-scale=1, initial-scale=1.0, width=device-width, user-scalable=no, viewport-fit=cover",
    },
    {
      httpEquiv: "X-UA-Compatible",
      content: "IE=edge",
    },
    {
      name: "msapplication-config",
      content: "/favicon/browserconfig.xml",
    },
    {
      name: "theme-color",
      content: "var(--background)",
    },
    {
      name: "msapplication-TileColor",
      content: "#000000",
    },
    {
      name: "msapplication-tap-highlight",
      content: "no",
    },
    {
      name: "apple-mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "default",
    },
    {
      name: "apple-mobile-web-app-title",
      content: "Starter",
    },
    {
      name: "mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "HandheldFriendly",
      content: "true",
    },
  ],
}

export default SEO
