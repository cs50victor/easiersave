import { useEffect } from "react"
import GlobalStyles from "/baseCSS"
import { ThemeProvider } from "next-themes"
import { DefaultSeo } from "next-seo"
import SEO from "next-seo.config"

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider
      defaultTheme="light"
      enableSystem={true}
      enableColorScheme={true}
      themes={["light", "dark"]}
      forcedTheme={Component.theme || null}
      disableTransitionOnChange
    >
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
