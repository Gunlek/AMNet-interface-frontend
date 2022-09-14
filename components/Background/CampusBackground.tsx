
import Image from 'next/image';
import { MediaContextProvider, Media } from '../MediaQueries/MediaSSR';

export default function CampusBackground() {
  return (
    <MediaContextProvider>
      <Media at="sm" >
        <Image
          src="/static/images/homepage/mobileCampus.webp"
          alt="AMNet Résidence Arts et Métiers Lille"
          objectFit="cover"
          layout="fill"
          objectPosition="50% 50%"
          sizes="100vw"
          priority={true}
        />
      </Media>

      <Media greaterThan="sm" >
        <Image
          src="/static/images/homepage/campus.webp"
          alt="AMNet Résidence Arts et Métiers Lille"
          objectFit="cover"
          layout="fill"
          objectPosition="50% 50%"
          sizes="100vw"
          priority={true}
        />
      </Media>
    </MediaContextProvider>
  )
} 