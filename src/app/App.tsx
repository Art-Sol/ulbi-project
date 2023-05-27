import React, {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';

import './styles/index.scss';

import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";

import {classNames} from "shared/lib/classNames/classNames";

export const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <Link to='/'>Главная</Link>
            <Link to='/about'>О сайте</Link>
            <AppRouter />
        </div>
    );
};