import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./components/Login.jsx";
import TodoApp from "./components/TodoApp.jsx";


function App() {
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);

  const router = createBrowserRouter([
    {
      path: "/",
      element: isAuthenticated ? <Navigate to="/login" /> : <Login />,
    },
    {
      path: "/login",
      element:<Login />,
    },
    {
      path: "/todo",
      element: <TodoApp />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
