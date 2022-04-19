import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div>
      <div className="container2">
        <div className="Navbar">
          <Navbar />
        </div>
        <div className="not-nav">
          <Home />
        </div>
      </div>
    </div>
  );
};

export default App;
