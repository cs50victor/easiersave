import Head from "next/head"
import tw from "twin.macro"
import { Logo } from "@components"

const Container = tw.div`relative h-screen bg-neutral-1
                  flex items-center justify-center`

export default function FullPageLoading() {
  return (
    <Container>
      <span tw="animate-spin">
        <Logo width="80" height="80" />
      </span>
    </Container>
  )
}
