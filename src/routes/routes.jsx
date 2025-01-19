import { MainLayout } from "@/layout";

export const routes = [
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      { path: "/", element: <h1>Dashboard</h1> },
      {
        path: "films",
        element: <h1>films</h1>,
      },
      {
        path: "people",
        element: <h1>people</h1>,
      },
      {
        path: "planets",
        element: <h1>planets</h1>,
      },
      {
        path: "species",
        element: <h1>species</h1>,
      },
      {
        path: "starships",
        element: <h1>starships</h1>,
      },
      {
        path: "vehicles",
        element: <h1>vehicles</h1>,
      },
      {
        path: "*",
        element: <h1>404 - Page Not Found</h1>,
      },
    ],
  },
];
