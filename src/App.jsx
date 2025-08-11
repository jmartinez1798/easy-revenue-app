import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-800">
      <Navbar />
      <main className="flex-1">{<Outlet />}</main>
      <Footer />
    </div>
  );
}
