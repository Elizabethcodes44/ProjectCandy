import "./home.css";
import Hero from "./Hero/hero.jsx";
import Sunglasses from "./sunglasses/sunglasses.jsx";
import About from "./About/about.jsx";
export default function Main({ setCartCount }) {
  const addToCart = (item) => {
    // Increment cart count when item is added
    setCartCount((prevCount) => prevCount + 1);
    
  };
  return (
    <>
      <div className="mainContainer">
        <main>
           <Hero></Hero>
           <About></About>
            <Sunglasses addToCart={addToCart}></Sunglasses>
            
        </main>
      </div>
    </>
  );
}
