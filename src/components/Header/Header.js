import React from 'react';

import css from "./Header.module.css"
import {UserInfo} from "../UserInfo/UserInfo";

const Header = () => {
    return (
        <div className={css.header}>
            <div></div>
            <p>Films store</p>
            <UserInfo/>
        </div>
    );
};

export {Header};