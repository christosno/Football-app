import { useState } from "react";
import Header from "./components/Header";
import FooterComp from "./components/FooterComp";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import LiveMatches from "./pages/LiveMatches";
import Leagues from "./pages/Leagues";
import Modal from "./components/Modal";

const RouteLayout = () => {
  const [isModalOn, setIsModalOn] = useState(false);

  const toggleSearchModalHandler = () => {
    setIsModalOn(!isModalOn);
  };

  const onCloseSearchModalHandler = () => {
    setIsModalOn(false);
  };

  return (
    <>
      {isModalOn && <Modal onCloseSearchModal={onCloseSearchModalHandler} />}
      <Header toggleSearchModal={toggleSearchModalHandler} />
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
      { path: "live-matches", element: <LiveMatches /> },
      { path: "leagues", element: <Leagues /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
