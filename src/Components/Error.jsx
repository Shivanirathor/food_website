// import React from "react";
// import { useRouteError } from "react-router-dom";
// const Error = () => {
//     const err = useRouteError();
//     console.log(err)
//   return (
//     <div>
//       <h1>Oops!!</h1>
//       <h2>Something Went Wrong</h2>
//       <h3>
//         {err.status}: {err.statusText}
//       </h3>
//     </div>
//   );
// };

// export default Error;

import React from "react";
import { useLocation } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>Error: Page Not Found</h1>
      <p>The page you're looking for does not exist.</p>
    </div>
  );
};
const RouteHeader = () => {
  const location = useLocation();

  // Conditionally render the Header component based on the route
  if (location.pathname !== "/error") {
    return <Header />;
  }

  return null;
};
export default Error;
