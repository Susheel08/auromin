import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { routes } from "./Routes";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => {
            return (
              <Route key={route.id} path={route.path} element={route.element} />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
