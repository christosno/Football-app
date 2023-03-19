import { useState } from "react";
import Header from "./components/Header";
import FooterComp from "./components/FooterComp";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import LiveMatches from "./pages/LiveMatches";
// import Leagues from "./pages/Leagues";
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
    <div id="test" className="absolute w-full h-full">
      {isModalOn && <Modal onCloseSearchModal={onCloseSearchModalHandler} />}
      <Header toggleSearchModal={toggleSearchModalHandler} />
      <div className="mt-44 h-[63vh] md:h-[57vh]">
        <Outlet />
      </div>
      {/* <FooterComp /> */}
    </div>
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
      // { path: "leagues", element: <Leagues /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
