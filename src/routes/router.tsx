import { createBrowserRouter } from "react-router-dom";
import { ROUTE_PATHS } from "./routePaths";
import Home from "./home/Home";
import Artist from "./artist/Artist";

const routes = createBrowserRouter([
    { path: ROUTE_PATHS.HOME, element: <Home /> },
    { path: ROUTE_PATHS.ARTIST, element: <Artist /> },
]);

export default routes;
