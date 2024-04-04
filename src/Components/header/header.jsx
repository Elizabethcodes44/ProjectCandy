import "./header.css";
import { Link } from "react-scroll";
import logo from "/assets/logo.svg";
import cart from "/assets/cart.png"
export default function Header({cartCount}) {
  return (
    <>
      <div className="header">
        <header>
          
          <div className="header_left">
            <ul className="header_list">
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  HOME
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="jewelries"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  JEWELRIES
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="Sunglasses"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  SUNGLASSES
                </Link>
              </li>
            </ul>
          </div>
          <div className="header_center">
            <img src={logo} className="logo" alt="logo" />
          </div>
          <div className="header_right">
          <div className="cart-container">
              <img src={cart} alt="cart" className="cart-icon" />
              <span className="cart-count">{cartCount}</span> 
            </div>
            <ul className="header_list">
              <li>
                {" "}
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="Watches"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  WRISTWATCHES
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="reviews"
                  spy={true}
                  smooth={true}
                  offset={-160}
                  duration={500}
                >
                  REVIEWS
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
}
