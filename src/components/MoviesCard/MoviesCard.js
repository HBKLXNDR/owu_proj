import React from 'react';
import css from "../Header/Header.module.css";
import {useNavigate} from "react-router-dom";
import {defaultPoster, noFoundImage} from "../../constants";
import {Stars} from "../Stars/Stars";


// check if onerror is needed??

const MoviesCard = ({movie: {title, vote_average, poster_path, id, release_date}}) => {
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
                    e.target.src = noFoundImage;
                }
            }} alt={title}/>
            <h3>{title}</h3>
            <Stars vote_average={vote_average}/>
            <p>{release_date}</p>

        </div>
    );
};

export {MoviesCard};