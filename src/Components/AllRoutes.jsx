import { Route, Routes } from "react-router-dom"
import Home from "./home"
import FavPacakages from "./favPacakages";


const AllRoutes = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favourates" element={<FavPacakages />} />
            </Routes>
        </>
    )
}

export default AllRoutes;