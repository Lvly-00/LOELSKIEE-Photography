import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Photo from "./pages/Photo";
import Video from "./pages/Video";
import Multimedia from "./pages/Multimedia";
import SDE from "./pages/SDE";
import Studio from "./pages/Studio";
import Layout from "./components/Layout";


import '@mantine/carousel/styles.css';
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/video" element={<Video />} />
          <Route path="/multimedia" element={<Multimedia />} />
          <Route path="/sde" element={<SDE />} />
          <Route path="/studio" element={<Studio />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
