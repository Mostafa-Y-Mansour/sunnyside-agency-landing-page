import "./Article.css";

function Article(props) {
  return (
    <>
      <div className={`article ${props.direction}`}>
        <div className="image-holder">
          <img src={props.img.src} alt={props.img.alt} className="image" />
        </div>
        <div className="article-content">
          <h2>{props.header}</h2>
          <p>{props.paragraph}</p>
          <a href={props.href} className="link">LEARN MORE</a>
        </div>
      </div>
    </>
    )
}

export default Article