import React from "react";
import {
  createBrowserRouter,
  Link,
  NavLink,
  Routes,
  BrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Movies from "./pages/Movies";
import Home from "./pages/Home";
import RootLayout from "./layouts/RootLayout";
import MovieDetails from "./components/MovieDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/movie" element={<Movies />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="movie/:id" element={<MovieDetails />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
