import Main from "./pages/PageMain";
import Menu from "./pages/MenuPage";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/menu" element={<Menu />} />
            </Routes>
        </>
    );
}

export default App;
