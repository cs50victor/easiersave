const cacheFontsHeaders = () => {
  const fontHeaders = []
  const fontFiles = ["inter-var-roman.woff2", "Radial-Bold.woff2", "Radial-Regular.woff"]

  fontFiles.forEach((value) => {
    fontHeaders.push({
      source: `/fonts/${value}`,
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    })
  })
  return fontHeaders
}

module.exports = {
  trailingSlash: false,
  reactStrictMode: true,
  experimental: {
    turboMode: true,
    eslint: true,
  },
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      ...cacheFontsHeaders(),
    ]
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, module: false }
    return config
  },
}

const ContentSecurityPolicy = `
  default-src 'self';
  font-src 'self';
  style-src 'self' 'unsafe-inline';
  img-src 'self' * blob: data:;
  object-src 'self' blob: data:;
  media-src 'self';
  child-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  connect-src 'self' data: ws: ;
`

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\n/g, ""),
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  // Opt-out of Google FLoC: https://amifloced.org/
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
]
