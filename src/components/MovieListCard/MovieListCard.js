import React from 'react';

const MovieListCard = ({movie:{original_title, poster_path, release_date}}) => {
    return (
        <div className={"product_card"}>
            <h2>{original_title}</h2>
            <img src={'https://image.tmdb.org/t/p/w500'+poster_path} alt={original_title}/>
            <p>{release_date}</p>
        </div>
    );
};

export {MovieListCard};