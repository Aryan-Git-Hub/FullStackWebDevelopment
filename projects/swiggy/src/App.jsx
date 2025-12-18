import Footer from "./components/Footer"
import Restuarants from "./components/Restaurants"
import { BrowserRouter, Routes, Route } from "react-router"
import { Home } from "./components/Home"
import { RestuarantMenu } from "./components/RestaurantMenu";

function App() {

return (
    <BrowserRouter>
      <Routes>
        {/* Main Home Page Layout */}
        <Route path="/" element={<Home />} />
        {/* Restaurants Page */}
        <Route path="/restaurants" element={<Restuarants />} />
        <Route path="/city/indore/:id" element={<RestuarantMenu />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
