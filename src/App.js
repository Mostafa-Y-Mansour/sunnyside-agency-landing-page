import './App.css';

import "./components/Main.css"

import Navbar from './components/Navbar';
import Content from './components/Content';
import Article from './components/Article';
import Card from './components/Card';
import Client from './components/Client';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Content/>

    <Article 

      direction="right"
      img={{
        src:require("./images/desktop/image-transform.jpg"),
        alt:"Egg"
      }}
      header="Transform your brand"
      paragraph="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
      href="#"
    />
    <Article 

      direction="left"
      img={{
        src:require("./images/desktop/image-stand-out.jpg"),
        alt:"glass"
      }}
      header="Stand out to the right audience"
      paragraph="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
      href="#"
    />
    
    <Card 
      img={{
        src: {
          desktop:require("./images/desktop/image-graphic-design.jpg"),
          mobile:require("./images/mobile/image-graphic-design.jpg")
        },
        alt: "glass"
      }}
      type="graphic"

      header="Graphic design"
      paragraph="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
    />
    <Card 
      img={{
        src: {
          desktop:require("./images/desktop/image-photography.jpg"),
          mobile:require("./images/mobile/image-photography.jpg")
        },
        alt: "glass"
      }}
      type="photography"
      header="Photography"
      paragraph=" Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
    />

      <Client/>

      <Gallery/>

      <Footer/>
    </>
  );
}

export default App;
