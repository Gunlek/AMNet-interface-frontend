
import Image from 'next/image';
import { MediaContextProvider, Media } from '../MediaQueries/MediaSSR';

export default function CampusBackground() {
  return (
    <MediaContextProvider>
      <Media at="sm" >
        <Image
          src="/static/images/homepage/mobileCampus.jpg"
          alt="AMNet Résidence Arts et Métiers Lille"
          objectFit="cover"
          layout="fill"
          objectPosition="50% 50%"
          sizes="100vw"
        />
      </Media>

      <Media greaterThan="sm" >
        <Image
          src="/static/images/homepage/campus.jpg"
          alt="AMNet Résidence Arts et Métiers Lille"
          objectFit="cover"
          layout="fill"
          objectPosition="50% 50%"
          sizes="100vw"
        />
      </Media>
    </MediaContextProvider>
  )
} 