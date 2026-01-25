import { BrowserRouter, Routes, Route } from "react-router-dom"; // Keep this import
import Home from "./pages/Home";
import Photo from "./pages/Photo";
import Video from "./pages/Video";
import Multimedia from "./pages/Multimedia";
import SDE from "./pages/SDE";
import Studio from "./pages/Studio"
// import Layout from "./components/Layout"; // Unused in your snippet, optional
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import '@mantine/carousel/styles.css';
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToHash from './components/ScrollToHash';


function App() {
  return (
    // CHANGE 1: Use BrowserRouter here instead of <>
    <BrowserRouter>
      <ScrollToHash />

      {/* Now ScrollToTop is INSIDE the Router, so useLocation() works */}
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/photo" element={<Photo />} />
        <Route path="/video" element={<Video />} />
        <Route path="/multimedia" element={<Multimedia />} />
        <Route path="/sde" element={<SDE />} />
        <Route path="/studio" element={<Studio />} />


        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />

    </BrowserRouter>
    // CHANGE 2: Close BrowserRouter here instead of </>
  );
}

export default App;