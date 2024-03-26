import React, { useContext } from "react";
import { provide } from "./store/contextprovider.jsx";
import ReactDOM from "react-dom/client";
import App from "./components/routes/App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/routes/App.css";
import About from "./components/About.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Textform from "./components/Textform.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <div classNameName="container my-10">
            <Textform heading={"Enter the text to analyze"}></Textform>
          </div>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
