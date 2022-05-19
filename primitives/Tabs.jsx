import tw, { css } from "twin.macro"
import { Fragment } from "react"
import { Tab } from "@headlessui/react"
export default function Tabs({ items, tabGroupProps }) {
  if (!items) return null
  return (
    <Tab.Group {...tabGroupProps}>
      <Tab.List tw="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
        {Object.keys(items).map((category) => (
          <Tab as={Fragment} key={category}>
            {({ selected }) => (
              <button
                css={[
                  tw`w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg
                  focus:(outline-none ring-2) (ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60)`,
                  selected
                    ? tw`bg-white shadow`
                    : tw`text-blue-100 hover:(bg-white/[0.12] text-white)`,
                ]}
              >
                {category}
              </button>
            )}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels tw="mt-2">
        {Object.values(items).map((group, idx) => (
          <Tab.Panel
            key={idx}
            tw="bg-white rounded-xl p-3 focus:(outline-none ring-2) (ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60)"
          >
            <ul>{group.map(item)}</ul>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}
function item(item) {
  return (
    <li key={item.id} tw="relative p-3 rounded-md hover:bg-gray-100">
      <p tw="text-sm font-medium leading-5 text-left">{item.title}</p>

      <ul tw="flex mt-1 space-x-1 text-xs font-normal leading-4 text-gray-500">
        <li>{item.date}</li>
        <li>&middot;</li>
        <li>{item.commentCount} comments</li>
        <li>&middot;</li>
        <li>{item.shareCount} shares</li>
      </ul>

      <a
        href="#"
        tw="absolute inset-0 rounded-md focus:(z-10 outline-none ring-2) ring-blue-400"
      />
    </li>
  )
}
