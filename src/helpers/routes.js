import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ user }) => {
  return user ? <Outlet /> : <Navigate to="/signin" />;
};

export const IsUserRedirect = ({ user, loggedInPath }) => {
  return !user ? <Outlet /> : <Navigate to={{ pathname: loggedInPath }} />;
};

// export const IsUserRedirect = ({ user, loggedInPath }) => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 1000);
//   }, []);
//   console.log(user)

//   return !user ? (
//     <Outlet />
//   ) : isLoading ? (
//     <Outlet />
//   ) : (
//     <Navigate to={{ pathname: loggedInPath }} />
//   );
// };

// export const IsUserRedirect = ({
//   user,
//   loggedInPath,
//   children,
//   ...restProps
// }) => {
//   return (
//     <Routes>
//       <Route
//         {...restProps}
//         render={() => {
//           if (!user) {
//             return children;
//           }

//           if (user) {
//             return <Navigate to={{ pathname: loggedInPath }} />;
//           }

//           return null;
//         }}
//       />
//     </Routes>
//   );
// };

// export const ProtectedRoute = ({ user, children, ...restProps }) => {
//   return (
//     <Routes>
//       <Route
//         {...restProps}
//         render={({ location }) => {
//           if (user) {
//             return children;
//           }
//           if (!user) {
//             return (
//               <Navigate
//                 to={{
//                   pathname: "/signin",
//                   state: { from: location },
//                 }}
//               />
//             );
//           }
//           return null;
//         }}
//       />
//     </Routes>
//   );
// };
