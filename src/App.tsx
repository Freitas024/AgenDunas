import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home"
import Agendamentos from "./pages/Agendamentos"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />}/>
        <Route path="/Agendamentos" element={<Agendamentos />}/>
      </Routes>
    </BrowserRouter>
  );
}
