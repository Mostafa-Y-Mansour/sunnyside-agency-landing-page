import "./Card.css"

function Card(props) {
  return(
    <>
      <div className={`card ${props.type}`}>
        <img src={props.img.src.desktop} alt={props.img.alt} className="img-desktop" />
        <img src={props.img.src.mobile} alt={props.img.alt} className="img-mobile" />
        <div className="text">
        <h2>{props.header}</h2>
        <p>{props.paragraph}</p>
        </div>
      </div>
    </>
  )
}

export default Card;