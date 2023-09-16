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
// import Movies from "./pages/Movies";
import Home from "./pages/Home";
import RootLayout from "./layouts/RootLayout";
import MovieDetails from "./components/MovieDetails";
import Error from "./components/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="*" element={<Error />} />
      <Route index element={<Home />} />
      {/* <Route path="movies" element={<Movies />} /> */}
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="movies/:id" element={<MovieDetails />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
