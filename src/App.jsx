import Main from "./pages/PageMain";
import Menu from "./pages/MenuPage";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <div className="bg-gray-50">
            <main>
              <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/menu" element={<Menu />} />
              </Routes>
            </main>
        </div>
    );
}

export default App;
