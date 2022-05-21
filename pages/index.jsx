import { useEffect, useState } from "react"
import * as yup from "yup"
import tw from "twin.macro"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import MarketingContainer from "@layouts/MarketingContainer"
import { Img, Input, Button, LoadingCircle, StyledLink, ExternalLink } from "@components"
import { Modal } from "@primitives"

const schema = yup.object().shape({
  videoUrl: yup
    .string("Url must be a string")
    .url("Invalid video url.")
    .required("Please enter video url!"),
})

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [videoDetails, setVideoDetals] = useState({})

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  })

  const onSubmit = async ({ videoUrl }) => {
    setIsLoading(true)

    const { url:fileUrl, thumbnail, title, error } = await fetch(
      `api/downloader?videoUrl=${videoUrl.trim()}`,
    ).then((res) => res.json())

    if (error) {
      setVideoDetals({ title: error })
    } else {
      setVideoDetals({ title, thumbnail, fileUrl })
    }

    setIsOpen(true)
    setIsLoading(false)
  }

  return (
    <MarketingContainer title="Home" footer noHeaderNav>
      <main
        tw="min-h-screen max-w-screen-sm w-full
          mx-auto px-4 pb-28 md:(px-8) flex
          flex-col items-center justify-center"
      >
        <h1
          tw="
          text-4xl sm:text-5xl text-center pt-10 mb-6 
          text-transparent bg-clip-text bg-gradient-to-br from-red-600  to-indigo-800
        "
        >
          Youtube <br/> Video Downloader
        </h1>

        <small tw="mt-8 text-neutral-5 px-2">
          e.g - https://www.youtube.com/watch?v=JGwWNGJdvx8
        </small>

        <form
          tw="space-y-5 text-left
              px-2 sm:px-16
              pt-5 pb-16
              w-full
              "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <Input
              type="url"
              placeholder="full video url"
              aria-label="video url"
              autoCapitalize="none"
              error={!!errors?.videoUrl}
              noLabel
              required
              {...register("videoUrl")}
            />
            <small tw="text-red-700">{errors?.videoUrl?.message}</small>
          </div>
          <Button
            type="submit"
            tw="flex items-center justify-center"
            disabled={!!isLoading}
            variant="primary"
            isLarge
          >
            {isLoading ? <LoadingCircle /> : "Download Video"}
          </Button>
        </form>
      </main>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        contentProps={{
          title: videoDetails?.title,
          content: (
            <div tw="font-hero flex flex-col items-center py-8 text-base md:(text-lg) space-y-4">
              {videoDetails?.thumbnail && videoDetails?.fileUrl && (
                <>
                  <ExternalLink href={videoDetails?.fileUrl}>
                    {/* this or use an image proxy */}
                    <img
                      src={videoDetails?.thumbnail}
                      alt="video thumbnail"
                      tw="w-auto h-auto rounded-md object-cover"
                    />
                  </ExternalLink>
                  <p tw="sm:(hidden)">Press & hold down image to save video</p>
                  <p tw="hidden sm:(block)">Right click image & choose "Save link as"</p>
                </>
              )}
            </div>
          ),
        }}
      />
    </MarketingContainer>
  )
}

Home.theme = "light"
