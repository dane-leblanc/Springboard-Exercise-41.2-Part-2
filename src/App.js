import React, { useState } from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import ColorList from "./ColorList";
import NewColorForm from "./NewColorForm";
import Color from "./Color";
import "./App.css";

function App() {
  const initialColors = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF",
  };
  const [colors, updateColors] = useState(initialColors);

  function handleAdd(newColorObj) {
    updateColors((prevColors) => ({ ...prevColors, ...newColorObj }));
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/colors" element={<ColorList colors={colors} />} />
          <Route
            path="/colors/new"
            element={<NewColorForm addColor={handleAdd} />}
          />
          <Route path="/colors/:color" element={<Color colors={colors} />} />
          <Route path="*" element={<Navigate to="/colors" />} replace />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
