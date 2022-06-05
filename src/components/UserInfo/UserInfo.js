import React from 'react';

import css from "../Header/Header.module.css"

const UserInfo = () => {
    return (
        <div className={css.round}>
            <p>FilmStore_User_332</p>
            <p>First registered - 22.07.2017</p>
            <button>Log Out</button>
        </div>
    );
};

export {UserInfo};