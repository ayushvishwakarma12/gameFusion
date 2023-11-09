import { Outlet } from "react-router-dom";
import Navbar from "../components/screen/Navbar";
import Footer from "../components/Common/Footer";

const BaseLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default BaseLayout;
