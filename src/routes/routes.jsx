import { MainLayout } from "@/layout";
import { FilmsPage, PeoplePage, PlanetsPage } from "@/pages";

export const routes = [
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      { path: "/", element: <h1>Dashboard</h1> },
      {
        path: "films",
        element: <FilmsPage/>,
      },
      {
        path: "people",
        element: <PeoplePage/>,
      },
      {
        path: "planets",
        element: <PlanetsPage/>,
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
