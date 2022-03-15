import { createMedia } from "@artsy/fresnel"

const ExampleAppMedia = createMedia({
    breakpoints: {
        sm: 0,
        lg: 800,
        xl: 1192
    },
  })
  
  // Make styles for injection into the header of the page
const mediaStyles = ExampleAppMedia.createMediaStyle()
export const { Media, MediaContextProvider } = ExampleAppMedia

export default mediaStyles