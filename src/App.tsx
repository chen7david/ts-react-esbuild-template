import React, { useState } from 'react'

export const App = () => {
    const [count, setCount] = useState(1)
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Adds</button>
        </>
    )
}