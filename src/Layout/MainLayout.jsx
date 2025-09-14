import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router";
import SmoothCursor from "../Components/CursorFollower/SmoothCursor";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* <SmoothCursor /> have to add relative class to parent*/}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
