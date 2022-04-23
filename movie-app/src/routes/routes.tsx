import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Layout from "../pages/layout";
import MovieDetails from "../pages/MovieDetails";
import Search from "../pages/Search";

const AppRoutes = () : React.ReactElement => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}/>
                <Route path="search" element={<Search />}/>
                <Route path="details/:id" element={<MovieDetails />}/>
            </Route>
        </Routes>
    )
}

export default AppRoutes;
