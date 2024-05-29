import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Quiz from "./Pages/Quiz";
import Result from "./Pages/Result";
import Signup from "./Pages/Signup";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: "signup",
    element: (
      <Layout>
        <Signup />
      </Layout>
    ),
  },
  {
    path: "login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    path: "quiz",
    element: (
      <Layout>
        <Quiz />
      </Layout>
    ),
  },
  {
    path: "result",
    element: (
      <Layout>
        <Result />
      </Layout>
    ),
  },
]);
function App() {
  return (
    <>
      <div className="App">
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
