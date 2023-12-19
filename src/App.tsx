import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import ResturantsPage from "./Pages/RestaurantsPage/ResturantsPage";
import AppHeader from "./Components/AppHeader/AppHeader";
import AppFooter from "./Components/AppFooter/AppFooter";
import RestaurantPage from "./Pages/RestaurantPage/RestaurantPage";

function App() {
  return (
    <Router>
      <AppHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurants/:type" element={<ResturantsPage />} />
        <Route
          path="/restaurant/:restaurantId/:restaurantName/:type"
          element={<RestaurantPage />}
        />
      </Routes>
      <AppFooter />
    </Router>
  );
}

export default App;
