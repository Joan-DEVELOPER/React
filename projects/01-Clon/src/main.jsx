// ! Fichero de configuración de la app
import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./Header/Header";
import BodyComponent from "./Body/BodyComponent";
import style from "./main.module.scss";

function App() {
  // *Renderiza el contenido
  return (
    <div>
      <Header />
      <BodyComponent />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
