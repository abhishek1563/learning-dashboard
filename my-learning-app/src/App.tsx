import { BrowserRouter, Routes, Route } from "react-router";
import Home from './Pages/Home'
import WorkInProgress from "./Component/Wip";
import { StrictMode } from "react";
import Header from "./Component/Header";

function App() {

  return (
    <StrictMode>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/frontEnd" element={<WorkInProgress />} />
          <Route path="/backEnd" element={<WorkInProgress />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  )
}

export default App
