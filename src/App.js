import "./App.css";
import Body from "./components/Body/food";
import Header from "./components/Header/header";
import Navbar from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Body />
    </div>
  );
}

export default App;
