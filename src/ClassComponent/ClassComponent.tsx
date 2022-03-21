import React from "react";

type Props = {};

type State = {
    count: number;
}

export class ClassComponent extends React.Component<Props, State> {
    constructor(props: Props | Readonly<Props>) {
        super(props);
        this.state = { count: 0 };
    }

    render() {
        return (
            <>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click me
                </button>
            </>
        );
    }
}