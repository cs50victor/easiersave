import { Fragment, useEffect, useRef, useState } from "react"
import tw, { css } from "twin.macro"
import Head from "next/head"
import Link from "next/link"
import SEO from "next-seo.config"
import { NextSeo } from "next-seo"
import { useRouter } from "next/router"
import { Transition } from "@primitives"
import { Dialog } from "@headlessui/react"
import { HiOutlineMenuAlt4, HiOutlineX } from "react-icons/hi"
import { Header, Button, Footer, Logo } from "@components"

export default function MarketingContainer({
  children,
  fixed,
  noHeaderNav,
  headerBorder,
  footer,
  footerNav,
  title,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const url = `${SEO.canonical}${router.route}`

  const closeModal = () => setIsOpen(false)

  const openModal = (e) => {
    e.preventDefault()
    setIsOpen(true)
  }

  return (
    <Fragment>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title,
        }}
      />
      <Header fixed={fixed} headerBorder={headerBorder} noHeaderNav={noHeaderNav}>
        <Logo showName />
        {!noHeaderNav && (
          <>
            <div tw="inline-flex items-center space-x-2.5 font-semibold sm:(hidden)">
              <Link href="/signup" passHref>
                <Button as="a" tw="relative px-2 py-2 ">
                  Sign Up
                </Button>
              </Link>
              <button
                tw="relative outline-none appearance-none ring-0"
                onClick={(e) => openModal(e)}
              >
                <HiOutlineMenuAlt4 tw="w-5 h-10 text-neutral-7" />
              </button>
            </div>
            <div tw="hidden sm:(inline-block space-x-2.5 font-semibold )">
              <Link href="/signin" passHref>
                <Button
                  as="a"
                  tw="px-3 py-2 bg-neutral-1  hocus:(bg-neutral-2)"
                  variant="gray"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/signup" passHref>
                <Button as="a" tw="px-3 py-2" variant="primary">
                  Sign Up
                </Button>
              </Link>
            </div>
          </>
        )}
        <MenuModal isOpen={isOpen} closeModal={closeModal} />
      </Header>
      {children}
      {footer && <Footer nav={footerNav} />}
    </Fragment>
  )
}

const MenuModal = ({ isOpen, closeModal }) => {
  const router = useRouter()
  const defaultFocus = useRef()

  return (
    <Transition show={isOpen} as={Fragment} tw="md:(hidden)">
      <Dialog
        initialFocus={defaultFocus}
        onClose={closeModal}
        tw="fixed inset-0 z-50 overflow-y-auto bg-gray-500 bg-opacity-50"
      >
        <div tw="min-h-screen text-center bg-base">
          <div
            tw="inline-flex flex-col w-full min-width[320px] overflow-x-hidden text-left 
                transition-all transform bg-transparent shadow-xl min-h-screen"
          >
            <div tw="mb-6 flex items-center justify-between py-1 px-3 border-b border-neutral-2">
              <Logo showName />
              <div className="nav-link" tw="flex items-center">
                <Link href="/signup" passHref>
                  <Button as="a" variant="primary" tw="px-2 py-2 max-w-sm mr-2">
                    Sign Up
                  </Button>
                </Link>
                <button
                  ref={defaultFocus}
                  tw="hocus:(outline-none appearance-none)"
                  onClick={closeModal}
                >
                  <HiOutlineX tw="w-5 h-10 text-neutral-7" />
                </button>
              </div>
            </div>
            <div tw="flex flex-col space-y-5 w-5/6 mx-auto">
              {/*other content here */}
              <Link href="/signin" passHref>
                <Button as="a" variant="inverted" tw="px-3 py-2 w-full">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup" passHref>
                <Button as="a" variant="primary" tw="px-3 py-2 w-full">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
