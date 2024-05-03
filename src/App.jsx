import React from "react";

import { Header } from "./components/Header";

import Instagram from "../src/components/screens/Instagram";
import Facebook from "../src/components/screens/Facebook";
import TikTok from "../src/components/screens/Tiktok";
import Whatsapp from "../src/components/screens/Whatsapp";

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/tiktok" element={<TikTok />} />
          <Route path="/facebook" element={<Facebook />} />
          <Route path="/whatsapp" element={<Whatsapp />} />
          <Route path="/instagram" element={<Instagram />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
