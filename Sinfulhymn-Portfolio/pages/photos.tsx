import { useEffect, useRef, useState } from 'react'
import { PageSEO } from '@/components/SEO'
import PageTitle from '@/components/PageTitle'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import photosData from '@/data/photosData'

export default function Photos() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (activeIndex !== null && !dialog.open) {
      dialog.showModal()
    } else if (activeIndex === null && dialog.open) {
      dialog.close()
    }
  }, [activeIndex])

  const active = activeIndex !== null ? photosData[activeIndex] : null

  return (
    <>
      <PageSEO title={`Photos - ${siteMetadata.author}`} description="A collection of photos." />
      <div className="hairline space-y-2 border-b pb-6">
        <PageTitle>Photos</PageTitle>
      </div>

      {!photosData.length && (
        <div className="apparatus py-6 text-secondaryText dark:text-fgMutedDark">
          Under construction.
        </div>
      )}

      <div className="columns-1 gap-4 pt-10 sm:columns-2 lg:columns-3">
        {photosData.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setActiveIndex(i)}
            className="mb-4 block w-full break-inside-avoid"
            aria-label={`View ${photo.alt} in full size`}
          >
            <Image
              src={photo.src}
              width={photo.width}
              height={photo.height}
              alt={photo.alt}
              className="w-full cursor-zoom-in rounded-sm object-cover transition-opacity hover:opacity-80"
            />
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setActiveIndex(null)}
        onClick={(e) => {
          if (e.target === dialogRef.current) setActiveIndex(null)
        }}
        className="backdrop:bg-purpleBackground/90 max-h-[90vh] max-w-[90vw] border-0 bg-transparent p-0"
      >
        {active && (
          <div className="relative">
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Close"
              className="apparatus absolute right-3 top-3 z-10 text-fgTextDark hover:text-secondaryAccentDark"
            >
              &#x2715;
            </button>
            <Image
              src={active.src}
              width={active.width}
              height={active.height}
              alt={active.alt}
              className="max-h-[90vh] w-auto object-contain"
            />
          </div>
        )}
      </dialog>
    </>
  )
}
