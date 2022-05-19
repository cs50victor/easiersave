import tw, { styled } from "twin.macro"

const Input = styled.input(({ noLabel, blueFocus, error }) => [
  tw` block w-full appearance-none bg-base
      px-3 py-4 
      text-neutral-7 text-sm sm:text-base 
      font-medium tracking-wide
      rounded-brand
      border border-neutral-3
      ring-neutral-3 ring-opacity-10
      placeholder-transparent
      focus:(outline-none ring-neutral-7 border-neutral-7)`,

  noLabel && tw`placeholder-neutral-3`,
  blueFocus && tw`focus:(ring-blue-200 border-blue-600)`,
  error &&
    tw`ring-red-700 border-red-700 
              focus:(ring-red-700 border-red-700)`,
])

export default Input
