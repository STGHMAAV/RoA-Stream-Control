import * as React from 'react';

export interface TextFieldProps {
    title: string;
    onChange(ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
}

export interface TextFieldState {
    text: string;
}

export default class TextField extends React.Component<TextFieldProps, TextFieldState> {

    constructor(props: Readonly<TextFieldProps>) {
        super(props);

        this.state = {
            text: ''
        };
    }

    public onChange(ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        let { onChange } = this.props;

        ev.preventDefault();

        this.setState({
            text: ev.currentTarget.value
        });

        onChange(ev);

    }

    public render() {
        let { title } = this.props;
        let { text } = this.state;

        return (
            <div>
                <label>
                    {title}
                    <textarea value={text} onChange={this.onChange.bind(this)} />
                </label>
            </div>
        )
    }
}