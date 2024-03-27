import "./header.css";
import { Link } from "react-scroll";
import logo from "../../assets/logo.svg";
export default function Header() {
  return (
    <>
      <div className="header">
        <header>
          <div className="header_left">
            <ul className="header_list">
              <li>
                <Link
                  to="hero"
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
            </ul>
          </div>
          <div className="header_center">
            <img src={logo} className="logo" alt="logo" />
          </div>
          <div className="header_right">
            <ul className="header_list">
              <li>
                {" "}
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  ABOUT US
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
