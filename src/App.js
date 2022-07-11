import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextApi } from "./lib/helper/ContextApi";
import "./App.css";

import Home from "./pages/Home";
import NoPage from "./pages/NoPage404";
import Layout from "./Layout";


function App() {
  const [isDisplayAlert, setIsDisplayAlert] = useState({
    isError: false,
    message: "",
    type: "error",
  });
  let [rectangles, setRectangles] = useState([]);
  let [circles, setCircles] = useState([]);
  let [images, setImages] = useState([]);
  let [textDraw, setTextDraw] = useState([]);
  let [zoomSquare, setZoomSquare] = useState(1);




 
  return (
    <ContextApi.Provider
      value={{
        isDisplayAlert,
        setIsDisplayAlert,
        rectangles,
        setRectangles,
        circles,
        setCircles,
        images,
        setImages,
        textDraw,
        setTextDraw,
        zoomSquare,
        setZoomSquare,
      }}
    >
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ContextApi.Provider>
  );
}

export default App;
