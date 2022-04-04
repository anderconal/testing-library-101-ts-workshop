import React, {useState} from 'react';

export function FunctionalComponentWithHooks() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <>
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => handleClick()}>Click me</button>
                <button role={'button'}>Button with forced button role</button>
                <div role={'button'}>Div with forced button role</div>
            </div>

            <div>
                <a
                    href={'https://anderconal.github.io/testing-library-101-ts-workshop/'}
                >
                    Anchor with href and default role link
                </a>
                <a role={'link'}>Anchor without href and forced role link</a>
                <a>Anchor without href and without role links</a>
                <div role={'link'}>Div without href and with role link</div>
            </div>
        </>
    );
}
