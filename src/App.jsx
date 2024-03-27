import "./App.css";
import Header from "./Components/header/header.jsx";
import Main from "./Components/main/home.jsx";
import Footer from "./Components/footer/footer.jsx";
function App() {
  return (
    <>
      <div className="App_container">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    </>
  );
}
export default App;
