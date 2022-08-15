import { Route, Routes } from 'react-router-dom';
import Navbar from './Layout/Navbar';
import Home from './pages/Home';
import ManageForm from './pages/ManageForm';
import Cart from './pages/Cart';
// import Manage from './Components/Manage/Manage';
import ContextProvider from './Contexts/Context';
import Commodity from './pages/Commodity';
import Inventory from './pages/Inventory';
import Order from './pages/Commodity';
import Footer from './Layout/Footer';
import Category from './Components/Home/Category';
import CardInfo from './Components/Home/CardInfo';
import Buy from './Components/Cart/BuyCart';
import Payment from './Components/Cart/Payment';
import PaymentSolution from './Components/Cart/PaymentSolution';


function App() {
  return (
    <ContextProvider>
      <div >
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home/:category' element={<Category/>} />
          <Route path='home/:category/:cardinfo' element={<CardInfo />} />
          <Route path='manageform' element={<ManageForm />} />
          <Route path='cart' element={<Cart />} />
          <Route path='cart/:buy' element={<Buy/>} />
          <Route path='cart/:buy/:payment' element={<Payment />} />
          <Route path='cart/:buy/:payment/:paymentsolution' element={<PaymentSolution />} />
          <Route path='commodity' element={<Commodity />} />
          <Route path='inventory' element={<Inventory />} />
          <Route path='order' element={<Order />} />
          {/* <Route path='manageform/:manage' element={<Manage />} /> */}
          <Route />
        </Routes>
        <Footer />
      </div>
    </ContextProvider>
  );
}

export default App;
