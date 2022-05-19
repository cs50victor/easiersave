import { Fragment, createContext, useEffect, useRef, useState } from "react"
import Link from "next/link"
import SEO from "next-seo.config"
import { NextSeo } from "next-seo"
import tw, { css } from "twin.macro"
import { useRouter } from "next/router"
import { Transition } from "@primitives"
import { Popover } from "@headlessui/react"
import {
  HiLightningBolt,
  HiCog,
  HiUser,
  HiOutlinePlusSm,
  HiOutlineCurrencyDollar,
} from "react-icons/hi"
import { Header, Img, Button, ThemeChanger, Footer, Logo } from "@components"
import { UserDropDown } from "./UserUIContainer"

export const HybridContext = createContext()

export const HybridContainer = ({
  children,
  fixed,
  headerBorder,
  footer,
  footerNav,
  title,
}) => {
  const router = useRouter()
  const [openTaskModal, setOpenTaskModal] = useState(false)
  const [isSignedIn, setIsSignedIn] = useState(false)
  const url = `${SEO.canonical}${router.route}`

  //const { data, error } = useSWR('/api/users', fetcher)
  // if (error) return <div>failed to load</div>
  // if (!data) return <div>loading...</div>
  // return <div>hello {data.name}!</div>

  return (
    <Fragment>
      <NextSeo
        title={title}
        canonical={url}
        robotsProps={{
          nosnippet: true,
          notranslate: true,
          noimageindex: true,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: "none",
          maxVideoPreview: -1,
        }}
        openGraph={{
          url,
          title,
        }}
      />
      <HybridContext.Provider
        value={{
          isSignedIn,
          setIsSignedIn,
        }}
      >
        <Header fixed={fixed} headerBorder={headerBorder}>
          <Logo url={isSignedIn ? "/home" : "/"} showName />
          <div tw="inline-flex items-center justify-end">
            {isSignedIn ? (
              <UserDropDown />
            ) : (
              <Link href="/signin" passHref>
                <Button as="a" tw="px-4 py-1.5">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </Header>
        {children}
        {footer && <Footer nav={footerNav} />}
      </HybridContext.Provider>
    </Fragment>
  )
}
