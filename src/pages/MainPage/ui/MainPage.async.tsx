import { lazy } from "react";

export const MainPageAsync = lazy(() => new Promise(resolve => {
    // Promise + SetTimeout для примера задержки
    // @ts-ignore
    setTimeout(() => resolve(import('./MainPage')), 1500);
}));