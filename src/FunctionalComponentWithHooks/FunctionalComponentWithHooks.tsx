import React, {useState} from 'react';

export function FunctionalComponentWithHooks() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <>
            <p>You clicked {count} times</p>
            <button onClick={() => handleClick()}>Click me</button>
            <button role={'button'}>Button with forced button role</button>
            <div role={'button'}>Div with forced button role</div>
        </>
    );
}
