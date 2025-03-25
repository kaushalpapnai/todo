import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./components/Login.jsx";


function App() {
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);

  const router = createBrowserRouter([
    {
      path: "/",
      element: isAuthenticated ? <Navigate to="/todo" /> : <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
