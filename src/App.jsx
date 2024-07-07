import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/Home";
import "./app.scss";

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
                <Route path={`/about`} element={<About />} />
            </Routes>
        </Suspense>
    );
}

export default App;
