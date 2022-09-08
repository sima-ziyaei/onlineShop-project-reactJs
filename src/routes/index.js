import { Route, Routes, BrowserRouter } from "react-router-dom";
//imports pages
import MainNavbar from "../layout/MainNavbar";
import ManageNavbar from "../layout/ManageNavbar";
import Footer from "../layout/Footer";
import Home from "../pages/home/Home";
import ManageForm from "../pages/ManageForm";
import Cart from "../pages/cart/Cart";
import Commodity from "../pages/panel/Commodity";
import Inventory from "../pages/panel/Inventory";
import Order from "../pages/panel/Order";
import Category from "../Components/Home/Category";
import CardInfo from "../Components/Home/CardInfo";
import BuyCart from "../Components/Cart/BuyCart";
import PaymentSolution from "../Components/Cart/PaymentSolution";
import Error404 from "../pages/errors/Error404";
import CartPayment from "../Components/Cart/CartPayment";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainNavbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<Category />} />
          <Route path="/:category/:id" element={<CardInfo />} />
          <Route path="manageform" element={<ManageForm />} />
          <Route path="cart" element={<Cart />} />
          <Route path="cart/buy" element={<BuyCart />} />
          <Route path="cart/buy/payment" element={<CartPayment />} />
          <Route
            path="cart/buy/paymentsolution"
            element={<PaymentSolution />}
          />
          <Route path="*" element={<Error404 />} />
        </Route>
        <Route element={<ManageNavbar />}>
          <Route path="commodity" element={<Commodity />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="order" element={<Order />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
