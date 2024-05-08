// import React from "react";
// import {
//   Outlet,
//   Router,
//   RouterProvider,
//   createBrowserRouter,
// } from "react-router-dom";
// import "./App.css";
// import Header from "./Components/Header";
// import MainContent from "./Components/MainContent";
// import Error from "./Components/Error";
// import About from "./Components/About";
// import Contact from "./Components/Contact";
// import Cart from "./Components/Cart";

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Outlet />
//       <RouterProvider router={router} />
//     </Router>
//   );
// };

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <MainContent />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//       {
//         path: "/cart",
//         element: <Cart />,
//       },
//     ],
//     errorElement: <Error />,
//   },
// ]);

// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import Error from "./Components/Error";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";

const App = () => {
  return (
    <Router>
      <div>
        <RouteHeader />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
};

const RouteHeader = () => {
  const location = useLocation();

  
  if (location.pathname !== "/error") {
    return <Header />;
  }

  return null;
};

export default App;
