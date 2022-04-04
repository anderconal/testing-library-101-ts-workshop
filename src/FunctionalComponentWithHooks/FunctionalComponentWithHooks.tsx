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
                {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                <button role={'button'}>Button with forced button role</button>
                <div role={'button'}>Div with forced button role</div>
            </div>

            <div>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href={'https://github.com/anderconal/'}>
                    Anchor with href and default role link
                </a>
                {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a role={'link'}>Anchor without href and forced role link</a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a>Anchor without href and without role links</a>
                <div role={'link'}>Div without href and with role link</div>
            </div>

            <div>
                <h2>Heading with default heading role</h2>
                {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                <h2 role={'heading'}>Heading with forced heading role</h2>
                <div role={'heading'} aria-level={3}>
                    Div with forced heading role and aria-level 3
                </div>
                <h4>Heading with aria-level 4</h4>
            </div>
        </>
    );
}
