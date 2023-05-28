import { useRoutes } from "react-router-dom";

// layouts
import NavbarOnlyLayout from "./layout/NavbarOnlyLayout";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import History from "./pages/History";

// import { Navigate, useLocation } from "react-router-dom";

function MainRoutes({ nhost }) {
  return useRoutes([
    {
      path: "/",
      element: <NavbarOnlyLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "login", element: <Login nhost={nhost} /> },
        { path: "register", element: <Register /> },
        { path: "settings", element: <Profile /> },
        { path: "history", element: <History /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);
}

export default function Routes({ nhost }) {
  return <MainRoutes nhost={nhost} />;
}
