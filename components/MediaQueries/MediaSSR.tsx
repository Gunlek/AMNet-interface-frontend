import { createMedia } from "@artsy/fresnel"

const AppMedia = createMedia({
    breakpoints: {
        sm: 0,
        lg: 800,
        xl: 1192
    },
  })
  
  // Make styles for injection into the header of the page
const mediaStyles = AppMedia.createMediaStyle()
export const { Media, MediaContextProvider } = AppMedia

export default mediaStyles