import React from "react";
import "./App.css";
import { Home } from "./pages/Home/Home";

import { Route, Routes } from "react-router-dom";
import { Menu } from "./pages/Manu/Menu";
import { Content } from "./pages/Content/Content";
import { ContentAudio } from './pages/ContentAudio/ContentAudio';

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/menu/radio",
    element: <ContentAudio />,
  },
  {
    path: "/menu/:contentslug",
    element: <Content />,
  },
];

function App() {
  return (
    <>
    <Routes>
        {routes.map((v) => (
          <Route key={v.path} path={v.path} element={v.element} />
        ))}
    </Routes>
    <div className="disclimer">Pleace Note! Project in not fully css-ed, this is just showcase of React possibilities. Data taken from internet archive and random placeholders. </div>
    </>
  );
}

export default App;
