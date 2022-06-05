import React from 'react';

import css from "./Header.module.css"
import {UserInfo} from "../UserInfo/UserInfo";
import {Switch} from "../Switch/Switch";

const Header = () => {
    return (
        <div className={css.header}>
            <Switch/>
            <p>Films store</p>
            <UserInfo/>
        </div>
    );
};

export {Header};