import React from 'react';
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";

import {movieActions} from "../../redux";
import css from "../Header/Header.module.css"

const GenreBadge = () => {
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();
    const getGenres = (genresArray) => {
        dispatch(movieActions.genresForSearch({genresArray}))
    }


    return (
        <div className={css.fixed}>
            <div className={css.inside}>
                <ul>
                    <p>Choose genre</p>
                    <form onSubmit={handleSubmit(getGenres)}>
                        <li><label>Action: <input type="checkbox" {...register('genresArray')} value={28}/></label>
                        </li>
                        <li><label>Adventure: <input type="checkbox" {...register('genresArray')}
                                                     value={12}/></label></li>
                        <li><label>Animation: <input type="checkbox" {...register('genresArray')}
                                                     value={16}/></label></li>
                        <li><label>Comedy: <input type="checkbox" {...register('genresArray')} value={35}/></label>
                        </li>
                        <li><label>Crime: <input type="checkbox" {...register('genresArray')} value={80}/></label>
                        </li>
                        <li><label>Documentary: <input type="checkbox" {...register('genresArray')}
                                                       value={99}/></label></li>
                        <li><label>Drama: <input type="checkbox" {...register('genresArray')} value={18}/></label>
                        </li>
                        <li><label>Family: <input type="checkbox" {...register('genresArray')}
                                                  value={10751}/></label></li>
                        <li><label>Fantasy: <input type="checkbox" {...register('genresArray')} value={14}/></label>
                        </li>
                        <li><label>History: <input type="checkbox" {...register('genresArray')} value={36}/></label>
                        </li>
                        <li><label>Horror: <input type="checkbox" {...register('genresArray')} value={27}/></label>
                        </li>
                        <li><label>Music: <input type="checkbox" {...register('genresArray')} value={10402}/></label>
                        </li>
                        <li><label>Mystery: <input type="checkbox" {...register('genresArray')}
                                                   value={9648}/></label></li>
                        <li><label>Romance: <input type="checkbox" {...register('genresArray')}
                                                   value={10749}/></label></li>
                        <li><label>Science Fiction: <input type="checkbox" {...register('genresArray')}
                                                           value={878}/></label>
                        </li>
                        <li><label>TV Movie': <input type="checkbox" {...register('genresArray')}
                                                     value={10770}/></label></li>
                        <li><label>Thriller: <input type="checkbox" {...register('genresArray')} value={53}/></label>
                        </li>
                        <li><label>War: <input type="checkbox" {...register('genresArray')} value={10752}/></label>
                        </li>
                        <li><label>Western: <input type="checkbox" {...register('genresArray')} value={37}/></label>
                        </li>
                        <button>Confirm genres</button>
                    </form>
                </ul>
            </div>
        </div>
    );
};

export {GenreBadge};