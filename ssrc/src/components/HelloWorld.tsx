import * as React from 'react';

export interface PropertyProps {
    helloMsg: string;
}

export default class HelloWorld extends React.Component<PropertyProps, {}> {

    public render() {
        let {helloMsg} = this.props; 

        return (
            <h1>{helloMsg}</h1>
        ); 
    }
}