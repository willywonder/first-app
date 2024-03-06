import "./App.css";
import Body from "./components/Body/food";
import Header from "./components/Header/header";
import Navbar from "./components/Nav/Nav";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
