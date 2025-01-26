import { MainLayout } from "@/layout";
import { FilmsPage, PeoplePage, PlanetsPage, SpeciesPage, StarshipsPage, VehiclesPage } from "@/pages";

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
        element: <SpeciesPage/>,
      },
      {
        path: "starships",
        element: <StarshipsPage/>,
      },
      {
        path: "vehicles",
        element: <VehiclesPage/>,
      },
      {
        path: "*",
        element: <h1>404 - Page Not Found</h1>,
      },
    ],
  },
];
