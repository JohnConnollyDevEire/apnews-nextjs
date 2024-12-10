'use client'

import { CarouselType, GallerySlideType } from '@/types/carousel'

import EntriesImage from '@/components/image/entries-image'

export default function Carousel(props: CarouselType) {
  if (props.slides.length === 0) {
    return null
  }

  const slides = [...props.slides].slice(0, 1)

  return (
    <div className="carousel">
      {slides.map((slide: GallerySlideType, index: number) => {
        if (
          slide?.media?.[0]?.image?.entries &&
          slide?.media?.[0]?.image?.entries?.length > 0
        ) {
          return (
            <div key={index} className="carousel-item">
              <EntriesImage entries={slide.media[0].image.entries} />
            </div>
          )
        } else {
          return null
        }
      })}
    </div>
  )
}
