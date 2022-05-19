import { Fragment, useState } from "react"
import tw, { css } from "twin.macro"
import { Listbox } from "@headlessui/react"
import Icons from "./Icons"
import Transition from "./Transition"

export default function Select({ items, listboxProps, listboxOptionsProps }) {
  const [selected, setSelected] = useState(items[0])
  if (items.length === 0) return null
  return (
    <Listbox
      value={selected}
      tw="focus-within:z-10 relative"
      onChange={setSelected}
      {...listboxProps}
    >
      {({ open }) => (
        <div>
          <Label text={selected?.name} />
          <Transition {...transitionProps}>
            {items.length > 0 && (
              <Listbox.Options
                tw="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                {...listboxOptionsProps}
              >
                {items.map(ListboxOption)}
              </Listbox.Options>
            )}
          </Transition>
        </div>
      )}
    </Listbox>
  )
}
const ListboxOption = (item, index) => {
  return (
    <Listbox.Option as={Fragment} key={index} value={item}>
      {(props) => <Option label={item.name} {...props} />}
    </Listbox.Option>
  )
}

const Label = ({ text }) => {
  return (
    <Listbox.Button
      tw="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default 
      focus:outline-none focus-visible:(ring-2 ring-opacity-75 ring-white ring-offset-amber-300 ring-offset-2 border-indigo-500) sm:text-sm"
    >
      <span tw="block truncate">{text}</span>
      <span tw="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <Icons.SelectorIcon tw="w-5 h-5 text-gray-400" aria-hidden="true" />
      </span>
    </Listbox.Button>
  )
}

const Option = ({ label, active, selected, ...rest }) => {
  return (
    <div
      css={[
        tw`cursor-default select-none relative py-2 pl-10 pr-4`,
        active ? tw`text-amber-900 bg-amber-100` : tw`text-gray-900`,
      ]}
      {...rest}
    >
      <span css={[tw`block truncate`, selected ? tw`font-medium` : tw`font-normal`]}>
        {label}
      </span>
      {selected && (
        <span
          css={[
            tw`absolute inset-y-0 left-0 flex items-center pl-3`,
            active ? tw`text-amber-600` : tw`text-amber-600`,
          ]}
        >
          <Icons.CheckIcon tw="w-5 h-5" aria-hidden="true" />
        </span>
      )}
    </div>
  )
}
const transitionProps = {
  leave: tw`transition ease-in duration-100`,
  leaveFrom: tw`opacity-100`,
  leaveTo: tw`opacity-0`,
}
