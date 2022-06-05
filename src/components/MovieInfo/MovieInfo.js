import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams} from "react-router-dom";

import css from "../Header/Header.module.css";
import {movieActions} from "../../redux";
import {defaultPoster, imdbImage, noFoundImage} from "../../constants";
import {Stars} from "../Stars/Stars";

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
                        e.target.src = noFoundImage;
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
            <div className={css.image}><Stars vote_average={vote_average}/> <a href={imdbURL}><img src={imdbImage} alt="imdb logo"/></a></div>


        </div>
    );
};

export {MovieInfo};


//
// "adult": false,
//     "backdrop_path": "/c1BaOxC8bo5ACFYkYYxL0bBWRaq.jpg",
//     "belongs_to_collection": null,
//     "budget": 4000000,
//     "genres": [
//     {
//         "id": 80,
//         "name": "Crime"
//     },
//     {
//         "id": 35,
//         "name": "Comedy"
//     }
// ],
//     "homepage": "https://www.miramax.com/movie/four-rooms/",
//     "id": 5,
//     "imdb_id": "tt0113101",
//     "original_language": "en",
//     "original_title": "Four Rooms",
//     "overview": "It's Ted the Bellhop's first night on the job...and the hotel's very unusual guests are about to place him in some outrageous predicaments. It seems that this evening's room service is serving up one unbelievable happening after another.",
//     "popularity": 12.56,
//     "poster_path": "/75aHn1NOYXh4M7L5shoeQ6NGykP.jpg",
//     "production_companies": [
//     {
//         "id": 14,
//         "logo_path": "/m6AHu84oZQxvq7n1rsvMNJIAsMu.png",
//         "name": "Miramax",
//         "origin_country": "US"
//     },
//     {
//         "id": 59,
//         "logo_path": "/yH7OMeSxhfP0AVM6iT0rsF3F4ZC.png",
//         "name": "A Band Apart",
//         "origin_country": "US"
//     }
// ],
//     "production_countries": [
//     {
//         "iso_3166_1": "US",
//         "name": "United States of America"
//     }
// ],
//     "release_date": "1995-12-09",
//     "revenue": 4257354,
//     "runtime": 98,
//     "spoken_languages": [
//     {
//         "english_name": "English",
//         "iso_639_1": "en",
//         "name": "English"
//     }
// ],
//     "status": "Released",
//     "tagline": "Twelve outrageous guests. Four scandalous requests. And one lone bellhop, in his first day on the job, who's in for the wildest New year's Eve of his life.",
//     "title": "Four Rooms",
//     "video": false,
//     "vote_average": 5.7,
//     "vote_count": 2158