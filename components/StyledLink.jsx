import tw, { styled } from "twin.macro"

const StyledLink = styled.a(({ arrow, variant, underline }) => [
  tw`appearance-none no-underline `,
  underline && tw`hocus:(underline)`,
  variant === "blue" && tw`text-blue-600`,
  variant === "brand" && tw`text-brand`,
  variant === "primary" && tw`text-brand hocus:(text-neutral-9)`,
  variant === "secondary" && tw`hocus:(text-brand)`,
  arrow && tw`after:(content["↗"])`,
])

export default StyledLink
