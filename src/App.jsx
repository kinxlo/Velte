import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./app.scss";
import Shop from "./pages/shop";
import ShopDetails from "./pages/shop/ShopDetails";
import Cart from "./pages/cart";
import CartLayout from "./layout/CartLayout";
import CartLayoutInfo from "./layout/CartLayoutInfo";
import CartLayoutPayment from "./layout/CartLayoutPayment";
import ThankYouPage from "./pages/checkoutCompleted";
import NotFoundPage from "./pages/404";

function App() {
    return (
        <Suspense
            fallback={
                <div style={{ width: `100%`, height: `100vh` }} className='d-flex align-items-center justify-content-center'>
                    {/* <SpinnerComponent /> */}
                </div>
            }
        >
            <Routes>
                {/* authentication */}
                <Route path={`/`} element={<Home />} />
                <Route path={`/shop`} element={<Shop />} />
                <Route path={`/shop/:id`} element={<ShopDetails />} />
                <Route path={`/cart/:id`} element={<Cart />}>
                    <Route path={`checkout`} element={<CartLayout />} />
                    <Route path={`information`} element={<CartLayoutInfo />} />
                    <Route path={`payment`} element={<CartLayoutPayment />} />
                </Route>
                <Route path={`/checkout`} element={<ThankYouPage />} />
                <Route path={`*`} element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    );
}

export default App;
