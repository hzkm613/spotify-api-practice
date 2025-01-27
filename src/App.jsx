import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Wrap with BrowserRouter
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";

const artistId = "0PBXAVipMP5B7A554hJX0R";

function App() {
  return (
    <Router>
      <div className="flex w-screen h-screen">
        <Navbar />
        <div className="flex-1">
          <Routes>
            {/*<Route path="/" element={<Home artistId={artistId} />} />*/}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
