import { Fragment, useEffect, useRef, useState } from "react"
import tw, { css } from "twin.macro"
import Link from "next/link"
import SEO from "next-seo.config"
import { NextSeo } from "next-seo"
import { Transition } from "@primitives"
import { Popover } from "@headlessui/react"
import Router, { useRouter } from "next/router"
import { Header, Img, Button, ThemeChanger, Footer, Logo } from "@components"
import { HiLightningBolt, HiCog, HiUser } from "react-icons/hi"

const dropDownOptions = [
  {
    name: "Tasks",
    href: "/#",
    icon: HiLightningBolt,
  },
  {
    name: "Profile",
    href: "/#",
    icon: HiUser,
  },
  {
    name: "Settings",
    href: "/#",
    icon: HiCog,
  },
]

export const UserUIContainer = ({
  children,
  fixed,
  headerBorder,
  footer,
  footerNav,
  title,
}) => {
  const router = useRouter()
  const [openTaskModal, setOpenTaskModal] = useState(false)
  const url = `${SEO.canonical}${router.route}`

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
      <Header fixed={fixed} headerBorder={headerBorder}>
        <Logo url="/home" showName />
        <div tw="inline-flex items-center justify-end">
          <UserDropDown />
        </div>
      </Header>
      {children}
      {footer && <Footer nav={footerNav} />}
    </Fragment>
  )
}

export const UserDropDown = () => {
  const [open, setOpen] = useState(false)

  return (
    <Popover tw="relative min-width[40px]">
      {({ open }) => (
        <Fragment>
          <Popover.Button
            tw="inline-flex justify-center ml-2 mr-1 my-2 
              rounded-full ease-in-out
              hover:(ring-8 ring-white ring-opacity-10)
              hocus:(outline-none)"
          >
            <Img
              tw="inline-block rounded-full object-cover bg-gray-200"
              width={40}
              height={40}
              src={"/static/default_avatar.png"}
              objectFit="cover"
              alt="..."
            />
          </Popover.Button>
          <Transition as={Fragment}>
            <Popover.Panel tw="absolute z-10 w-28 transform -translate-x-1/2">
              <div
                tw="relative bg-neutral-1 px-1 py-2 text-xs text-neutral-8
                    overflow-hidden rounded-brand shadow-2xl border ring-neutral-3 ring-opacity-5
                    sm:(text-sm py-3 font-medium tracking-wide)"
              >
                {dropDownOptions.map((option) => (
                  <div key={option.name}>
                    <Link href={option.href} passHref>
                      <a
                        tw="inline-flex items-center w-full p-2 transition duration-150
                          ease-in-out rounded-brand 
                          hocus:(bg-neutral-8 text-neutral-1 outline-none)"
                      >
                        <span tw="mr-2">
                          <option.icon width={18} />
                        </span>
                        {option.name}
                      </a>
                    </Link>
                    <hr tw="opacity-80 my-1" />
                  </div>
                ))}
                <div
                  tw="inline-flex justify-center items-center w-full p-1 transition duration-150
                      ease-in-out rounded-brand hocus:(outline-none)"
                >
                  <ThemeChanger />
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Fragment>
      )}
    </Popover>
  )
}
