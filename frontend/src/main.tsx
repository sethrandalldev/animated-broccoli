import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./App";
import LoginPage from "./routes/LoginPage";
import LaunchesPage from "./routes/LaunchesPage";
import "./index.css";
import LaunchPage from "./routes/LaunchPage";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/launches",
    element: (
      <Layout>
        <LaunchesPage />
      </Layout>
    ),
  },
  {
    path: "/launches/:id",
    element: (
      <Layout>
        <LaunchPage />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
