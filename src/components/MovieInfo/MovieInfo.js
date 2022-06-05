import React from 'react';

const MovieInfo = ({movie: {poster_path, original_title, genres, release_date, overview, vote_average, runtime}}) => {

    return (
        <div>
            <img src={'https://image.tmdb.org/t/p/original' + poster_path} alt={original_title}/>
            <h2>{original_title}</h2>
            <p>{overview}</p>
            <p>released {release_date} - rating {vote_average}</p>
            <p>{runtime} Min</p>
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