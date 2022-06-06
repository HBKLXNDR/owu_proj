import React from 'react';
import {GenreBadge, MoviesListCard} from "../../components";

const MoviesListPage = () => {
    return (
        <div>
            <GenreBadge/>
            <MoviesListCard/>
        </div>
    );
};

export {MoviesListPage};