import React from "react";
import "./App.css";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import { createBrowserRouter } from "react-router-dom";
import About from "./Components/About";
import Error from "./Components/Error";
const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    component: <MainContent />,
    errorElement: <Error />,
  },
  {
    path: "/aboutUs",
    component: <About />,
  },
]);
export default App;
