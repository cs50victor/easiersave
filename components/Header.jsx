import tw, { css } from "twin.macro"

export default function Header({ fixed, headerBorder, noHeaderNav, children }) {
  return (
    <header
      css={[
        tw`top-0 z-30 w-full 
                `,
        fixed &&
          tw`fixed bg-neutral-yang
                [@supports (backdrop-filter: none)]:(backdrop-filter backdrop-blur-lg saturate-150 bg-[var(--background)])`,
        headerBorder && tw`border-b border-neutral-2`,
      ]}
    >
      <nav
        className="nav-link"
        css={[
          tw`flex items-center  w-full max-height[54px] overflow-y-hidden
                    max-w-screen-lg py-2 px-3 mx-auto lg:(px-2)`,
          noHeaderNav ? tw`justify-center` : tw`justify-between`,
        ]}
      >
        {children}
      </nav>
    </header>
  )
}
