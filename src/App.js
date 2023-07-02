import "./App.css";
import About from "./components/About/About";
import { Cover } from "./components/Cover/Cover";
import Destinations from "./components/Destinations/Destinations";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="header-bg">
        <Header />
        <Cover />
      </div>
      <About />
      <Destinations />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
