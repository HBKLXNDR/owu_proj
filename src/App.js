import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {MoviesPage} from "./pages/MoviesPage/MoviesPage";

function App() {
    return (
        <Routes>
            <Route path={"/"} element={<MainLayout/>}>
                <Route index element={<Navigate to={"movie"}/>}/>
                <Route path={"movie"} element={<MoviesPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
