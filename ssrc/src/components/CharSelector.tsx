import * as React from 'react';
import { SmashChars } from '../constants/smashchars';

export interface CharSelectorProps {
    onCharChange(char: string): void;
}

export interface CharSelectorState {
}

export default class CharSelector extends React.Component<CharSelectorProps, CharSelectorState> {

    constructor(props: Readonly<CharSelectorProps>) {
        super(props);

        this.state = {
        };
    }

    public onChange(ev: React.SyntheticEvent<HTMLSelectElement>): void {
        this.props.onCharChange(ev.currentTarget.value); 
    }

    public render() {
        let options: JSX.Element[] = [];

        SmashChars.forEach((sc) => {
            options.push(<option key={sc} value={sc}>{sc}</option>)
        })

        return (
            <div className={'CharSelector'} >
                <select onChange={this.onChange.bind(this)} name='pChar'>
                    {options}
                </select>
            </div>
        )
    }
}