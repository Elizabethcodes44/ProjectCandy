import "./home.css";
import Hero from "./Hero/hero.jsx";
import Sunglasses from "./sunglasses/sunglasses.jsx";
import About from "./About/about.jsx";
export default function Main() {
  return (
    <>
      <div className="mainContainer">
        <main>
           <Hero></Hero>
           <About></About>
            <Sunglasses></Sunglasses>
            
        </main>
      </div>
    </>
  );
}
