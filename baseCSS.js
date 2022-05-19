import { Global } from "@emotion/react"
import tw, { theme, css, GlobalStyles as BaseStyles } from "twin.macro"

const hToR = (hex) =>
  hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => "#" + r + r + g + g + b + b,
    )
    .substring(1)
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16))
    .join(",")

const colors = [
  `${theme("colors.white")}`, // [0] 255,255,255
  `${theme("colors.gray.100")}`, // 245,245,245
  `${theme("colors.gray.200")}`, // 229,229,229
  `${theme("colors.gray.300")}`, // 212,212,212
  `${theme("colors.gray.400")}`, // 163,163,163
  `${theme("colors.gray.500")}`, // 115,115,115
  `${theme("colors.gray.600")}`, // 82,82,82
  `${theme("colors.gray.700")}`, // 64,64,64
  `${theme("colors.gray.800")}`, // 38,38,38
  `${theme("colors.gray.900")}`, // 23,23,23
  `${theme("colors.black")}`, // [10] 0,0,0
]
// for (let i = 0; i < colors.length; i++) {
//   console.log(`+++ ${hToR(colors[i])}`)
// }
const customStyles = css`
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 100 900;
    font-display: optional;
    src: url(/fonts/inter-var-roman.woff2?v=3.19) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
      U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: "Spline";
    font-style: normal;
    font-weight: 100 900;
    font-display: optional;
    src: url(/fonts/spline-sans.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
      U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: "Radial";
    font-style: normal;
    font-weight: 700;
    font-display: optional;
    src: url(/fonts/Radial-Bold.woff2) format("woff2"),
      url(/fonts/Radial-Regular.woff) format("woff");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
      U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: "Radial";
    font-style: normal;
    font-weight: 400;
    font-display: optional;
    src: url(/fonts/Radial-Regular.woff) format("woff");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
      U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  :root {
    --brand-lighter: ${hToR(colors[1])};
    --brand-light: ${hToR(colors[3])};
    --brand-base: ${hToR(colors[6])};
    --brand-dark: ${hToR(colors[7])};
    --brand-darker: ${hToR(colors[9])};
    --background: ${hToR(colors[0])};
    --background-secondary: ${hToR(colors[2])};
    --neutral-yang: ${hToR(colors[0])};
    --neutral-1: ${hToR(colors[1])};
    --neutral-2: ${hToR(colors[2])};
    --neutral-3: ${hToR(colors[3])};
    --neutral-4: ${hToR(colors[4])};
    --neutral-5: ${hToR(colors[5])};
    --neutral-6: ${hToR(colors[6])};
    --neutral-7: ${hToR(colors[7])};
    --neutral-8: ${hToR(colors[8])};
    --neutral-9: ${hToR(colors[9])};
    --neutral-ying: ${hToR(colors[10])};
  }

  [data-theme="dark"] {
    --background: ${hToR(colors[9])};
    --background-secondary: ${hToR(colors[7])};
    --neutral-yang: ${hToR(colors[10])};
    --neutral-1: ${hToR(colors[9])};
    --neutral-2: ${hToR(colors[8])};
    --neutral-3: ${hToR(colors[7])};
    --neutral-4: ${hToR(colors[6])};
    --neutral-5: ${hToR(colors[5])};
    --neutral-6: ${hToR(colors[4])};
    --neutral-7: ${hToR(colors[3])};
    --neutral-8: ${hToR(colors[2])};
    --neutral-9: ${hToR(colors[1])};
    --neutral-ying: ${hToR(colors[0])};
  }

  #__next {
    ${tw`min-h-screen`}
  }

  html,
  body {
    scroll-behavior: smooth;
    font-style: normal;
    font-stretch: normal;
    font-kerning: normal;
    text-size-adjust: 100%;
    text-rendering: auto;
    font-feature-settings: "kern" 1, "liga" 1, "calt" 1;
    ${tw`antialiased`}
  }
  html {
    font-size: 100%;
    quotes: "“" "”";
  }
  body {
    font-size: 17px;
    ${tw`font-normal tracking-tight text-neutral-8 bg-base`}
  }
  html,
  body,
  header {
    min-width: 320px;
  }
  .nav-title {
    ${tw`text-lg font-bold md:text-xl`}
  }
  .nav-link {
    ${tw`text-sm`}
  }
  h1,
  .h1,
  h2,
  .h2,
  h3,
  .h3,
  h4,
  h5,
  h6 {
    ${tw`font-bold font-hero text-neutral-9`}
  }
  .h1 {
    ${tw`text-3xl lg:text-4xl `}
  }
  .h2 {
    ${tw`text-2xl lg:text-3xl`}
  }
  .h3 {
    ${tw`text-xl lg:text-2xl `}
  }
  .p {
    ${tw`text-base lg:text-lg`}
  }
  .hero-headline,
  .h2-headline,
  .section-headline {
    ${tw`font-bold`}
  }
  .hero-headline,
  .h2-headline {
    ${tw`text-3xl md:text-4xl lg:text-5xl`}
  }
  .hero-headline-lg {
    ${tw`text-6xl md:text-7xl lg:text-8xl`}
  }
  .subhead {
    ${tw`text-xl font-medium md:text-2xl`}
  }
  .subhead-lg {
    ${tw`text-2xl font-semibold md:text-3xl lg:text-5xl`}
  }
  .section-headline {
    //p tag
    ${tw`text-4xl md:text-6xl lg:text-7xl`}
  }
  .caption {
    font-size: 12px;
  }
  .sub-text {
    // or timeStamp, caption-lg, paragraph small
    font-size: 14px;
  }
  button,
  a,
  select,
  option {
    ${tw`appearance-none`}
  }
  a {
    cursor: pointer;
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
