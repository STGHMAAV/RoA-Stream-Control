import * as React from 'react';

import '../styles/scorefield.scss';

export interface ScoreFieldProps {
    title: string;
    onChange(ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
}

export interface ScoreFieldState {
    score: number;
    error: boolean;
}

export default class ScoreField extends React.Component<ScoreFieldProps, ScoreFieldState> {

    constructor(props: Readonly<ScoreFieldProps>) {
        super(props);

        this.state = {
            score: 0,
            error: false
        };
    }

    public onChange(ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        // let { onChange } = this.props;
        let { score, error } = this.state;

        ev.preventDefault();

        score = parseInt(ev.currentTarget.value);
        error = false;

        if (!score) {
            score = 0;
            error = true;
        }

        this.setState({
            score: score,
            error: error
        });

        // onChange(ev);

    }

    public render() {
        let { title } = this.props;
        let { score, error } = this.state;

        return (
            <div className={'scorefield'} >
                <label className={'label'}>{title}</label>
                <div  className={'scoreinput'} style={{ borderColor: error ? 'red' : '' }}>
                    <input type='number' value={score} onChange={this.onChange.bind(this)} />
                </div>
            </div>
        )
    }
}