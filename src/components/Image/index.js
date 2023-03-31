import "./Image.css"

function Image(props) {
  return (
    <>
      <div className="image">
        <img src={props.img.src.desktop} alt={props.img.alt} className="desktop"/>
        <img src={props.img.src.mobile} alt={props.img.alt} className="mobile"/>
      </div>
    </>
  )
}

export default Image;