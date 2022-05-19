import tw, { css } from "twin.macro"
import { Disclosure as HeadlessDisclosure } from "@headlessui/react"
import Icons from "./Icons"
import Transition from "./Transition"
import { HiX } from "react-icons/hi"

export default function Disclosure({
  items,
  xIcon,
  noBorder,
  disclosureProps,
  buttonProps,
  panelProps = {},
}) {
  if (!items) return null
  return (
    <div tw="p-2 space-y-2">
      {items.map((item) => {
        return (
          <HeadlessDisclosure key={item.heading} {...disclosureProps}>
            {({ open }) => (
              <div>
                <HeadlessDisclosure.Button
                  css={[
                    tw`flex justify-between w-full px-1 py-2 text-sm font-medium text-left focus:outline-none`,
                    !noBorder && tw`border-b`,
                  ]}
                  {...buttonProps}
                >
                  <span>{item.heading}</span>
                  {xIcon ? (
                    <HiX
                      css={[
                        tw`w-3 h-3 rotate-45 duration-200 ease-in`,
                        open && tw`transform rotate-180`,
                      ]}
                    />
                  ) : (
                    <Icons.ChevronUp
                      css={[
                        tw`w-5 h-5 duration-200 ease-in-out`,
                        open && tw`transform rotate-180`,
                      ]}
                    />
                  )}
                </HeadlessDisclosure.Button>
                <Transition show={open} {...transitionProps}>
                  <HeadlessDisclosure.Panel
                    static
                    tw="px-4 pt-4 pb-2 text-sm text-gray-500"
                    {...panelProps}
                  >
                    {item.content}
                  </HeadlessDisclosure.Panel>
                </Transition>
              </div>
            )}
          </HeadlessDisclosure>
        )
      })}
    </div>
  )
}
const transitionProps = {
  enter: tw`transition ease-out duration-100`,
  enterFrom: tw`transform opacity-0 scale-95`,
  enterTo: tw`transform opacity-100 scale-100`,
  leave: tw`transition ease-out duration-75`,
  leaveFrom: tw`transform opacity-100 scale-100`,
  leaveTo: tw`transform opacity-0 scale-95`,
}
/**
 * Frameworks
 * ----------
 * Resources
 * ----------
 * Company
 * ----------
 * Legal
 */
