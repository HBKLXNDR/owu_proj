import React from 'react';
import {useNavigate} from "react-router-dom";

import {defaultPoster, ImageNotFound} from "../../constants";
import {StarsRating} from "../Stars/StarsRating";
import css from "../Header/Header.module.css";


const MoviesList = ({movie: {title, vote_average, poster_path, id, release_date}}) => {
    const _url = (defaultPoster + poster_path)
    const navigate = useNavigate();

    const toMovieInfo = () => {
        navigate(`/movie/${id}`, {state: id})
    }

    return (
        <div className={css.item} onClick={toMovieInfo}>
            <img src={_url} onError={(e) => {
                if (e.target.src !== {_url}) {
                    e.target.onerror = null;
                    e.target.src = ImageNotFound;
                }
            }} alt={title}/>
            <h3>{title}</h3>
            <StarsRating vote_average={vote_average}/>
            <p>{release_date}</p>

        </div>
    );
};

export {MoviesList};