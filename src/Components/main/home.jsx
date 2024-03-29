import "./home.css";
import Hero from "./Hero/hero.jsx";
import Sunglasses from "./sunglasses/sunglasses.jsx";
export default function Main() {
  return (
    <>
      <div className="mainContainer">
        <main>
            <Hero></Hero>
            <Sunglasses></Sunglasses>
        </main>
      </div>
    </>
  );
}
