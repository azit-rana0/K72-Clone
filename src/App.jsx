import { Link, Route, Routes } from "react-router-dom";
import Agence from "./pages/Agence";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/navigation/Navbar";
import FullScreenNav from "./components/navigation/FullScreenNav";

export default function App() {
  return (
    <div>
      <Navbar />
      <FullScreenNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}
