import React from 'react';
import {notFoundPageImage} from "../../constants";

const NotFoundPage = () => {
    return (
        <div>
            <img src={notFoundPageImage} alt="Page does not exist"/>
        </div>
    );
};

export {NotFoundPage};