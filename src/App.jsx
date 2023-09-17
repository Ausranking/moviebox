import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Home from "./pages/Home";
// import MovieDetails from "./components/MovieDetails";
import Error from "./components/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<Error />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="movies/:id" element={<Movies />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
