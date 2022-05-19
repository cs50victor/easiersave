const colors = require("tailwindcss/colors")
const { fontFamily } = require("tailwindcss/defaultTheme")

const withOpacity = (variable) => {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgba(var(${variable}),${opacityValue})`
  }
}

module.exports = {
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        gray: colors.zinc, //.slate,.gray, .zinc, .neutral
        brand: {
          lighter: withOpacity("--brand-lighter"),
          light: withOpacity("--brand-light"),
          DEFAULT: withOpacity("--brand-base"),
          dark: withOpacity("--brand-dark"),
          darker: withOpacity("--brand-darker"),
        },
        neutral: {
          yang: withOpacity("--neutral-yang"),
          1: withOpacity("--neutral-1"),
          2: withOpacity("--neutral-2"),
          3: withOpacity("--neutral-3"),
          4: withOpacity("--neutral-4"),
          5: withOpacity("--neutral-5"),
          6: withOpacity("--neutral-6"),
          7: withOpacity("--neutral-7"),
          8: withOpacity("--neutral-8"), //base
          9: withOpacity("--neutral-9"),
          ying: withOpacity("--neutral-ying"),
        },
      },
      backgroundColor: {
        base: withOpacity("--background"),
        secondary: withOpacity("--background-secondary"),
      },
      fontFamily: {
        sans: ["Inter", "SF Pro Text", "-apple-system", ...fontFamily.sans],
        hero: ["Radial", "SF Pro Text", "-apple-system", ...fontFamily.sans],
      },
      borderRadius: {
        brand: "9px",
        brandSecondary: "4px",
      },
      translate: {
        15: "3.7rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
  ],
}
