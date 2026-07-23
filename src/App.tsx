import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Trabalho from "./pages/Trabalho";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-svh bg-ink">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trabalho" element={<Trabalho />} />
          </Routes>
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}
