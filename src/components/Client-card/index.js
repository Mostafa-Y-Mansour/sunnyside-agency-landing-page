import "./Client-card.css"

function ClientCard (props) {
  return (
    <>
      <div className="client-card">
        <img src={props.img.src} alt={props.img.alt} />
        <p>{props.paragraph}</p>
        <div className="client-sign">
          <h3>{props.name}</h3>
          <p>{props.position}</p>
        </div>
      </div>
    </>
  )
}

export default ClientCard;



