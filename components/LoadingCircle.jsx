import tw from "twin.macro"

const SpinningSvg = tw.svg`animate-spin h-7 w-7 text-brand`

export default function LoadingCircle({ fill }) {
  return (
    <SpinningSvg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle
        tw="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke={fill || "currentColor"}
        strokeWidth="4"
      />
      <path
        tw="opacity-75"
        fill={fill || "currentColor"}
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </SpinningSvg>
  )
}
