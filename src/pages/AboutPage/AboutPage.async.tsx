import { lazy } from "react";

export const AboutPageAsync = lazy(() => new Promise(resolve => {
    // Promise + SetTimeout для примера задержки
    // @ts-ignore
    setTimeout(() => resolve(import('./AboutPage')), 1500);
}));