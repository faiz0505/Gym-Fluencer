import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
function App() {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
