import "./hero.css";
import heroimage from "../../../../public/assets/homeimage.jpg";
export default function Hero() {
  return (
    <>
      <div className="heropage" id="home">
        <div className="textandimage">
          <h2>CANDY</h2>
          <h1>GLITTERZ</h1>
          <img src={heroimage} alt="heroimage" />
        </div>
      </div>
    </>
  );
}
