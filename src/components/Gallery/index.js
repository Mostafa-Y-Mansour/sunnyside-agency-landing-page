import "./Gallery.css"
import Image from "../Image";

function Gallery() {
  return (
    <>
      <div className="Gallery">
        <Image
          img={{
          src: {
            desktop: require("../../images/desktop/image-gallery-cone.jpg"),
            mobile: require("../../images/mobile/image-gallery-cone.jpg")
          },
          alt: "Gallery Image"
        }} />

        <Image
          img={{
          src: {
            desktop: require("../../images/desktop/image-gallery-milkbottles.jpg"),
            mobile: require("../../images/mobile/image-gallery-milkbottles.jpg")
          },
          alt: "Gallery Image"
        }} />

        <Image 
          img={{
          src: {
            desktop: require("../../images/desktop/image-gallery-orange.jpg"),
            mobile: require("../../images/mobile/image-gallery-orange.jpg")
          },
          alt: "Gallery Image"
        }} />

        <Image 
          img={{
          src: {
            desktop: require("../../images/desktop/image-gallery-sugarcubes.jpg"),
            mobile: require("../../images/mobile/image-gallery-sugar-cubes.jpg")
          },
          alt: "Gallery Image"
        }} />
      </div>
    </>
  )
}

export default Gallery;