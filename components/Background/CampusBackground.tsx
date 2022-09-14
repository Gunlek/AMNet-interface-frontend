
import Image from 'next/image';

export default function CampusBackground() {
  return (
    <Image
      src="/static/images/homepage/campus.jpg"
      alt="AMNet Résidence Arts et Métiers Lille"
      objectFit="cover"
      layout="fill"
      quality={100}
      sizes="(max-width: 1000px) 275vw"
    />
  )
} 