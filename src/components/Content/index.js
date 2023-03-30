import "./Content.css"
import arrow from "../../images/icon-arrow-down.svg"

function scrollDown( ){
  window.scrollTo({
    top: 1000,
    left: 0,
    behavior: "smooth",
})
}

function Content() {
  return(
    <>
      <div className="content">
        <h1>WE ARE CREATIVES</h1>
        <div className="arrow" onClick={scrollDown}>
        <img className="arrow" src={arrow}  alt="arrow" />
        </div>
      </div>
    </>
  )
}

export default Content;