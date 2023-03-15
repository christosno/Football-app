import Header from "./components/Header";
import FooterComp from "./components/FooterComp";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Authentication from "./pages/Authentication";

const RouteLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <FooterComp />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "auth", element: <Authentication /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
