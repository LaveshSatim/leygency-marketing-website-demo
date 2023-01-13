import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const App = () => {


    return (
        <div>

            <BrowserRouter>

                <Routes>

                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/clients" element={<Clients />} />
                    <Route path="/contact" element={<Contact />} />

                </Routes>

            </BrowserRouter>

        </div>
    )

}

export default App;  