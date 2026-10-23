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
import ProductsProvider from "./features/products/context/ProductsContext";
import CartProvider from "./features/cart/context/CartContext";
import AuthProvider from "./features/auth/context/AuthContext";
import ProtectedRoute from "./features/auth/components/ProtectedRoute";

function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <AuthProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="category/:name" element={<CategoryPage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="checkout" element={<CheckoutPage />} />
              <Route path="order/:id" element={<ConfirmationPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route element={<ProtectedRoute />}>
                <Route path="admin" element={<AdminPage />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </AuthProvider>
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
