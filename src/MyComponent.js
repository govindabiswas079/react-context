import React, { useState, useCallback, Fragment } from 'react';

const MyComponent = () => {
    const [count, setCount] = useState(0);

    // Arrow function with useCallback
    const handleClick = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []);

    return (
        <div>

            <ChildComponent count={count} onClick={handleClick} />
            <button onClick={handleClick}>
                Click me
            </button>
        </div>
    );
};

const ChildComponent = React.memo(({ onClick, count }) => {
    console.log("ChildComponent")
    return (
        <Fragment>
            <p>Count: {count}</p>
        </Fragment>
    );
});

export default MyComponent;
