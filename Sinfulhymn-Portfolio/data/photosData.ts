export interface Photo {
  src: string
  width: number
  height: number
  alt: string
}

const photosData: Photo[] = [
  {
    src: '/static/images/main_photo.jpg',
    width: 3072,
    height: 4096,
    alt: 'Portrait photo',
  },
]

export default photosData
