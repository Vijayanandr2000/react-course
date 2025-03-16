import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CountryList from "./pages/CountryList";
import CountryDetails from "./pages/CountryDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<CountryList />} />
        <Route path="/country/:name" element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
