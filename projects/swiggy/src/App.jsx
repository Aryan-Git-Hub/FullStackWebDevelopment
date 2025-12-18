import Footer from "./components/Footer"
import Restuarants from "./components/Restaurants"
import { BrowserRouter, Routes, Route } from "react-router"
import { Home } from "./components/Home"
import { RestuarantMenu } from "./components/RestaurantMenu";
import ScrollToTop from "./components/ScrollToTop";

function App() {

return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Main Home Page Layout */}
        <Route path="/" element={<Home />} />
        {/* Restaurants Page */}
        <Route path="/restaurants" element={<Restuarants />} />
        <Route path="/city/indore/:id" element={<RestuarantMenu />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
