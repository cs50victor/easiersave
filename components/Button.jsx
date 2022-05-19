import tw, { styled } from "twin.macro"

const Button = styled.button(({ variant = "primary", isSmall, isLarge, isBold }) => [
  // The common button styles added with the tw import
  tw`   p-3 rounded-brand w-full
        text-white font-medium tracking-tight
        transform duration-200 ease-in-out
        bg-brand-dark
        text-center
        outline-none
        ring-0
        hocus:(bg-brand ring-0 outline-none appearance-none)
        disabled:(
          cursor-not-allowed opacity-60 
          appearance-none ring-0 outline-none
          text-neutral-8 bg-base border-2 border-neutral-3)
        `,

  variant === "primary" &&
    tw` bg-neutral-9 text-neutral-1 hocus:(bg-neutral-8)
        disabled:hocus:(bg-base text-neutral-8)
      `,

  variant === "secondary" &&
    tw`hocus:( bg-neutral-9 text-brand)
         disabled:hocus:(bg-base text-neutral-8)`,

  variant === "outline" &&
    tw`border border-neutral-9 bg-transparent text-neutral-8
      hocus:(bg-neutral-1) disabled:hocus:(bg-base text-neutral-8)`,

  variant === "inverted" &&
    tw`border border-neutral-9 bg-transparent text-neutral-8
      hocus:(bg-neutral-9 text-neutral-1) disabled:hocus:(bg-base text-neutral-8)`,

  variant === "gray" &&
    tw`bg-neutral-2 text-neutral-9 hocus:(bg-neutral-3)
        disabled:hocus:(bg-base text-neutral-8)
      `,

  isSmall && tw`text-sm`,
  isLarge && tw`text-lg`,
  isBold && tw`font-semibold`,
])

export default Button
