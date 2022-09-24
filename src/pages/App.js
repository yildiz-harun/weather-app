import { Routes, Route, Outlet, Link, Navigate } from "react-router-dom";
import Login from "./Login"
import Home from "./Home";
import NoMatch from "./NoMatch";
import City from "./City";

import { useSelector } from 'react-redux'

function App() {
  const apiKey = useSelector((state) => state.apiKey.value)

  return (
    <Routes>
      <Route path="/" element={apiKey !== "" ? <Home /> : <Navigate to="/login" />} />
      <Route path="/login" element={apiKey == "" ? <Login /> : <Navigate to="/" />} />
      <Route path="/city/:id" element={<City />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}
export default App;