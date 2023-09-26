import React from "react"
import classes from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = React.useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h2 className={classes.title}>{count}</h2>
            <button className={classes.button} onClick={increment} type="button">
                increment
            </button>
        </div>
    )
}

