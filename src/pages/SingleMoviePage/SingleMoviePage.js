import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const SingleMoviePage = () => {
    const [movie, setMovie] = useState(null);
    const {movieId} = useParams()
    const {movies} = useSelector(state => state.movies)

    useEffect(() => {
        const filter = movies.filter((movie) => movie.id == movieId)
        setMovie(filter[0])
    }, [movies])

    return (
        <div>
            SingleMoviePage
        </div>
    );
};

export {SingleMoviePage};