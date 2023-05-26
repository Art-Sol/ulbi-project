import React, {useState} from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(count => count + 1);
    }

    return (
        <div className={classes.btn}>
            <button onClick={handleIncrease}>increase</button>
            <span>{count}</span>
        </div>
    );
};
