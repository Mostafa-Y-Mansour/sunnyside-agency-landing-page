import ClientCard from "../Client-card";
import "./Client.css"

function client() {
  return (
    <>
      <div className="client"> 
        <h3>CLIENT TESTIMONIALS</h3>
        <div className="clients-cards">
          <ClientCard
          img={{
            src: require("../../images/image-emily.jpg"),
            alt: "photo"
          }}
          paragraph="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit." 
          name="Emily R."
          position="Marketing Director"
          />
          
          <ClientCard
          img={{
            src: require("../../images/image-thomas.jpg"),
            alt: "photo"
          }}
          paragraph="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience." 
          name="Thomas S."
          position=" Chief Operating Officer"
          />
          
          <ClientCard
          img={{
            src: require("../../images/image-jennie.jpg"),
            alt: "photo"
          }}
          paragraph="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!" 
          name="Jennie F."
          position=" Business Owner"
          />
        </div>
      </div>
    </>
  )
}

export default client;