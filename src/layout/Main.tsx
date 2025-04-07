import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DynamicHelmet from "../components/DynamicHelmet";
import ScrollToTop from "../components/ScrollToTop";

export default function Main() {
  return (
    <div className="font-sans">
      <ScrollToTop />
      <DynamicHelmet />
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
