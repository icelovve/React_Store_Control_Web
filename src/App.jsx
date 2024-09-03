import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Forgot from "./pages/Auth/Forgot";
import CreateAccount from "./pages/Auth/Create_Account";
import Home from "./pages/backend/Home"
import Order from "./pages/backend/Order";
import Admin from "./pages/backend/Admin";
import Paymay from "./pages/backend/Paymay";
import Employees from "./pages/backend/Employees";
import Product from "./pages/backend/Product";
import PageError404 from "./pages/backend/PageError404";
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Auth */}
                <Route path="/" exact={true}  element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot" element={<Forgot />} />
                <Route path="/Create_Account" element={<CreateAccount />} />

                {/* Backend */}
                <Route path="/home" element={<Home />} />
                <Route path="/order-management" element={<Order />} />
                <Route path="/admin-accounts" element={<Admin />} />
                <Route path="/payment-management" element={<Paymay />} />
                <Route path="/employees-management" element={<Employees />} />
                <Route path="/product-management" element={<Product />} />

                {/* Page Error 404 */}
                <Route path="*" element={<PageError404 />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
