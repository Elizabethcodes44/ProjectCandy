// Layout.js
import WhatsAppIcon from "/assets/footer/whatsapp.jpg";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      {children}
      <a href="https://wa.me/2349078891497" target="_blank" className="whatsapp-icon">
        <img src={WhatsAppIcon} alt="WhatsApp" />
      </a>
    </div>
  );
};

export default Layout;
