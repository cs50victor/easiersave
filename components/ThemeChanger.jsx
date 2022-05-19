import { useEffect, useState } from "react"
import tw, { css } from "twin.macro"
import { useTheme } from "next-themes"
import useSound from "use-sound"
import { Switch } from "@headlessui/react"

const ThemeChanger = ({ indicator, switchType = false }) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [isDark, setIsDark] = useState(false)
  const color = isDark ? "#fffef6" : "#000"
  const maskColor = "#ffffff"

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true)
    resolvedTheme === "light" ? setIsDark(false) : setIsDark(true)
  }, [resolvedTheme])

  const capitalize = (s) => {
    if (typeof s !== "string") return ""
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  const [play] = useSound("/sounds/switch-on.mp3", { volume: 0.9 })

  const switchTheme = () => {
    if (mounted) {
      play()
      setTheme(theme === "light" ? "dark" : "light")
      theme === "light" ? setIsDark(false) : setIsDark(true)
    }
  }

  return (
    <span tw="inline-block">
      {switchType ? (
        <Switch
          checked={isDark}
          onChange={switchTheme}
          css={[
            tw`relative inline-flex items-center flex-shrink-0 height[35px] w-24 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-700 focus:(outline-none ring-2 ring-white ring-opacity-10)`,
            !isDark ? tw`bg-indigo-200` : tw`bg-indigo-600`,
          ]}
        >
          <span tw="sr-only">Change Theme</span>
          <span
            aria-hidden="true"
            css={[
              tw`pointer-events-none inline-block height[31px] width[34px] rounded-full shadow-lg transform ring-0 transition ease-in-out duration-700`,
              !isDark ? tw`translate-x-15 bg-amber-500` : tw`translate-x-0 bg-neutral-9`,
            ]}
          />
          <div
            css={[
              tw`absolute font-semibold tracking-wide`,
              !isDark ? tw`left-3` : tw`right-3`,
            ]}
          >
            {!isDark ? capitalize(resolvedTheme) : capitalize(resolvedTheme)}
          </div>
        </Switch>
      ) : (
        <button
          tw="relative flex items-center justify-center opacity-50 
            rounded w-[42px] h-[42px] transition ease-in-out delay-300 hover:(opacity-100)"
          type="button"
          aria-label="Toggle Dark Mode"
          onClick={switchTheme}
        >
          <div className="moon-or-sun" />
          <div className="moon-mask" />
          <style jsx>{`
            .moon-or-sun {
              position: relative;
              width: 20px;
              height: 20px;
              border-radius: 50%;
              border: ${isDark ? "4px" : "2px"} solid;
              border-color: ${color};
              background: ${color};
              transform: scale(${isDark ? 0.5 : 1});
              transition: all 0.45s ease;
              overflow: ${isDark ? "visible" : "hidden"};
            }
            .moon-or-sun::before {
              content: "";
              position: absolute;
              right: -9px;
              top: -9px;
              height: 20px;
              width: 20px;
              border: 2px solid;
              border-color: ${color};
              border-radius: 50%;
              transform: translate(${isDark ? "14px, -14px" : "0, 0"});
              opacity: ${isDark ? 0 : 1};
              transition: transform 0.45s ease;
            }
            .moon-or-sun::after {
              content: "";
              width: 8px;
              height: 8px;
              border-radius: 50%;
              margin: -4px 0 0 -4px;
              position: absolute;
              top: 50%;
              left: 50%;
              box-shadow: 0 -23px 0 ${color}, 0 23px 0 ${color}, 23px 0 0 ${color},
                -23px 0 0 ${color}, 15px 15px 0 ${color}, -15px 15px 0 ${color},
                15px -15px 0 ${color}, -15px -15px 0 ${color};
              transform: scale(${isDark ? 1 : 0});
              transition: all 0.35s ease;
            }
            .moon-mask {
              position: absolute;
              right: 8px;
              top: 8px;
              height: 15px;
              width: 15px;
              border-radius: 50%;
              border: 0;
              background: ${maskColor};
              transform: translate(${isDark ? "8px, -8px" : "0, 0"});
              opacity: ${isDark ? 0 : 1};
              transition: transform 0.45s ease-out;
            }
          `}</style>
        </button>
      )}
    </span>
  )
}

export default ThemeChanger
