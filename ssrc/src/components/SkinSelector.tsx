import * as React from 'react';

export interface SkinSelectorProps {
    selectedChar: string;
}

export interface SkinSelectorState {
    selected: number;
    numberSkins: number;
}

export default class SkinSelector extends React.Component<SkinSelectorProps, SkinSelectorState> {

    constructor(props: Readonly<SkinSelectorProps>) {
        super(props);

        this.state = {
            selected: 0,
            numberSkins: this.props.selectedChar.toLocaleLowerCase().includes('mii') ? 1 : 8
        };
    }

    public onClick(ev: React.MouseEvent<HTMLInputElement, MouseEvent>): void {
        ev.preventDefault();

        this.setState({ selected: parseInt(ev.currentTarget.value) });
    }

    public componentWillUpdate(nextProps: any) {
        let { selectedChar } = this.props;
        if (nextProps.selectedChar && selectedChar && nextProps.selectedChar !== selectedChar) {
            this.setState({
                selected: 0,
                numberSkins: nextProps.selectedChar.toLocaleLowerCase().includes('mii') ? 1 : 8
            });
        }
    }

    public render() {
        let { selectedChar } = this.props;
        let { selected, numberSkins } = this.state;

        let buttons = [];

        for (let i = 0; i < numberSkins; ++i) {
            buttons.push(<input onClick={this.onClick.bind(this)}
                disabled={i === selected} style={{ opacity: i === selected ? 0.5 : 1 }}
                key={`${selectedChar}_${i}`} value={i} type="image" alt={i.toString()}
                src={require(`./../stockIcons/${selectedChar.toLowerCase()}_${i}.png`)} />);
        }

        return (
            <div className={'skinselector'} >
                {buttons}
            </div>
        )
    }
}