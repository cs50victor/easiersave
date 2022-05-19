import { useState } from "react"
import tw, { css } from "twin.macro"
import Image from "next/image"
import { defaultImageBlur } from "@utils/imageBlur"

export default function Img(props) {
  const [isLoading, setLoading] = useState(true)

  return (
    <Image
      css={[
        tw`duration-300 ease-in`,
        isLoading && tw`motion-safe:(animate-pulse) scale-105`,
      ]}
      src={props.src}
      alt={props.alt}
      placeholder="blur"
      blurDataURL={defaultImageBlur}
      onLoadingComplete={() => setLoading(false)}
      {...props}
    />
  )
}
