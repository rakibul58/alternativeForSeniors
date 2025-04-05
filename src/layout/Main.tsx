import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DynamicHelmet from "../components/DynamicHelmet";

export default function Main() {
  return (
    <div className="font-sans">
      <DynamicHelmet />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
