import React, {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';

import './styles/index.scss';

import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";

import {classNames} from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";

export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
        </div>
    );
};