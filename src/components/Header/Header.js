import React from 'react';
import {useDispatch} from "react-redux";

import css from "./Header.module.css"
import {UserInfo} from "../UserInfo/UserInfo";
import {Switch} from "../Switch/Switch";
import {movieActions} from "../../redux";
import {NavLink} from "react-router-dom";

const Header = () => {
    const dispatch = useDispatch();
    const reset =()=>{
        dispatch(movieActions.resetGenresArrForSearch())
    }
    return (
        <div className={css.header}>
            <Switch/>
            <NavLink to={'/movies'} onClick={() => reset()}>Films store</NavLink>
            <UserInfo/>
        </div>
    );
};

export {Header};