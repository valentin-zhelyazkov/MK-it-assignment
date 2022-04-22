import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Layout from "../pages/layout";

const AppRoutes = () : React.ReactElement => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}/>
            </Route>
        </Routes>
    )
}

export default AppRoutes;
