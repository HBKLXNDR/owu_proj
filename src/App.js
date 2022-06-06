import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {MoviesListPage, NotFoundPage, MoviePage} from "./pages";

function App() {
    return (<Routes>
        <Route path={"/"} element={<MainLayout/>}>
            <Route index element={<Navigate to={"movies"}/>}/>
            <Route path={"movies"} element={<MoviesListPage/>}/>
            <Route path={"movie/:id"} element={<MoviePage/>}/>
            <Route path={"*"} element={<NotFoundPage/>}/>
        </Route>
    </Routes>);
}

export default App;
