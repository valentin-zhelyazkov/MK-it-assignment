import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Layout from "../pages/layout";
import Login from "../pages/login";
import MovieDetails from "../pages/MovieDetails";
import Register from "../pages/register";
import Search from "../pages/Search";
import Test from "../pages/test";

const AppRoutes = () : React.ReactElement => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}/>
                <Route path="search" element={<Search />}/>
                <Route path="details/:id" element={<MovieDetails />}/>
                <Route path="detailsMovie/:id" element={<Test />}/>
                <Route path="register" element={<Register />}/>
                <Route path="login" element={<Login />}/>
            </Route>
        </Routes>
    )
}

export default AppRoutes;
