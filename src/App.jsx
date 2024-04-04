import "./App.css";
import  { useState } from "react";

import Header from "./Components/header/header.jsx";
import Main from "./Components/main/home.jsx";
import Footer from "./Components/footer/footer.jsx";
import Layout  from "./layout.jsx";
function App() {
  const [cartCount, setCartCount] = useState(0);
  return (
    <>
    <Layout>
      <div className="App_container">
        <Header cartCount={cartCount}></Header>
        <Main setCartCount={setCartCount}></Main>
        <Footer></Footer>
      </div>
      </Layout>
    </>
  );
}
export default App;
