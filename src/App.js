import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {MoviesPage} from "./pages/MoviesPage/MoviesPage";
import {SingleMoviePage} from "./pages/SingleMoviePage/SingleMoviePage";

function App() {
    return (
        <Routes>
            <Route path={"/"} element={<MainLayout/>}>
                <Route index element={<Navigate to={"discover/movie"}/>}/>
                <Route path={"discover/movie"} element={<MoviesPage/>}/>
                <Route path={"movie/:id"} element={<SingleMoviePage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
