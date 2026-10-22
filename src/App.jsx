import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import HomePage from "./features/products/pages/HomePage";
import CategoryPage from "./features/products/pages/CategoryPage";
import CartPage from "./features/cart/pages/CartPage";
import CheckoutPage from "./features/cart/pages/CheckoutPage";
import ConfirmationPage from "./features/cart/pages/ConfirmationPage";
import LoginPage from "./features/auth/pages/LoginPage";
import RegisterPage from "./features/auth/pages/RegisterPage";
import AdminPage from "./features/admin/pages/AdminPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="category/:name" element={<CategoryPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="order/confirmation" element={<ConfirmationPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
