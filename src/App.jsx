import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/PageMain";
import Menu from "./pages/MenuPage";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="bg-gray-50">
            <>
              <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/menu" element={<Menu />} />
              </Routes>
              <Footer />
            </>
        </div>
    );
}

export default App;
