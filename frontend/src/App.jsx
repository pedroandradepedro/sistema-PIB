import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Membros from "./pages/Membros";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar></Sidebar>
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/membros" element={<Membros />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
