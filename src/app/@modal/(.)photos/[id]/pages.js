
import Frame from '@/components/Frame/Frame'
import swagPhotos, { Photo } from '../../../../photos'
import Modal from '@/components/Modal/Modal'

export default function PhotoModal({ params: { id: photoId } }: { params: { id: string } }) {
  const photos = swagPhotos
  const photo: Photo = photos.find((p) => p.id === photoId)!

  return (
    <Modal>
      <Frame photo={photo} />
    </Modal>
  )
}
