import Link from "next/link"
import tw from "twin.macro"
import SEO from "next-seo.config"

const Logo = ({ url, width, height }) => {
  const currLink = url || "/"

  return (
    <Link href={currLink} passHref>
      <a className="nav-title" tw="font-hero text-neutral-9 inline-flex items-center">
        <span>{SEO.defaultTitle}</span>
      </a>
    </Link>
  )
}
export default Logo
