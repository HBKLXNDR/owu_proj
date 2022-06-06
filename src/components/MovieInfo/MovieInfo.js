import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams} from "react-router-dom";

import css from "../Header/Header.module.css";
import {movieActions} from "../../redux";
import {defaultPoster, imdbImage, ImageNotFound} from "../../constants";
import {StarsRating} from "../Stars/StarsRating";

const MovieInfo = () => {
    const {state} = useLocation()
    const {details, genresOfOneMovie} = useSelector(state => state.movies)
    const {id} = useParams()
    const dispatch = useDispatch();
    const {
        budget, title, vote_average,
        release_date, original_language, overview, poster_path, imdb_id, production_countries, runtime
    } = details

    useEffect(() => {
        if (id) {
            dispatch(movieActions.getDetails({id}))
        } else {
            const {id} = state
            dispatch(movieActions.getDetails({id}))
        }
    })

    const countryObject = () => {
        if (production_countries) {
            return production_countries.map(value => value.name)
        } else {
            return 'unknown'
        }
    }

    const clearCountry = countryObject().toString().replace(",", ",")
    const _url = (defaultPoster + poster_path)
    const imdbURL = `https://www.imdb.com/title/${imdb_id}/`;


    return (
        <div className={css.bigger_container}>
            <div className={css.product_card_details}>
                <img src={_url} onError={(e) => {
                    if (e.target.src !== {_url}) {
                        e.target.onerror = null;
                        e.target.src = ImageNotFound;
                    }
                }} alt={title}/>

                <div>
                    <h2>{title}</h2>
                    <div><h4>Overview:</h4><p>{overview}</p></div>
                    <div>Genres: <span className={css.text}>{genresOfOneMovie}</span></div>
                    {clearCountry && <p> Сountry : <span className={css.text}>{clearCountry}</span> </p>}
                    <p>Length <span className={css.text}>{runtime} min</span></p>
                    <p>Released on <span className={css.text}> {release_date} </span></p>
                    {budget !==0 && <p>Budget : <span className={css.text}> {budget}</span></p>}
                    <p>original_language: <span  className={css.text}>{original_language} </span></p>

                </div>

            </div>
            <div className={css.image}><StarsRating vote_average={vote_average}/> <a href={imdbURL}><img src={imdbImage} alt="imdb logo"/></a></div>


        </div>
    );
};

export {MovieInfo};