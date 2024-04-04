import "./footer.css";
import footerlogo from "/assets/logo.svg";
import tiktok from "/assets/footer/tiktok.jpg";
import instagram from "/assets/footer/instagram.jpg";
import whatsapp from "/assets/footer/whatsapp.jpg";
export default function Footer() {
  return (
    <>
      <div className="footerContainer" id="contact">
        <footer>
          <img src={footerlogo} alt="logo" />
          <div className="Text">
            <h3>WHO ARE WE?</h3>
            <p>
              Elevate Your Style with Exquisite Jewelry.<br></br> We are your premier
              destination for timeless elegance and stunning craftsmanship.<br></br>
              Explore Our Collection Today!
            </p>
          </div>
          <div className="links">
          <a href="https://www.tiktok.com/@candygliterz?_t=8lDSsSEiIDN&_r=1">
            <img src={tiktok} className="tiktok_icon" alt="tiktok" />
          </a>
          <a href="https://www.instagram.com/candyglitterz?igsh=MXk2eGJsZzhuZWU%3D&utm_source=qr">
            <img src={instagram} className="instagram_icon" alt="instagram" />
          </a>
          <a
            href="https://wa.me/2349078891497
"
            target="_blank"
          >
            <img src={whatsapp} className="whatsapp_icon" alt="whatsapp" />
          </a>
          </div>
        </footer>
      </div>
    </>
  );
}
