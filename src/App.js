import { Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
function App() {
  return (
    <div className="App">
     <Navbar />
     <main style={{ backgroundColor: "#252525", color: "white" }}>
     <Routes>
      {/* <Route path="/" element={<LandingPage />} /> */}
      <Route path="/Navbar" element={<Navbar />} />


     </Routes>
      </main>
    </div>
  );
}

export default App;
