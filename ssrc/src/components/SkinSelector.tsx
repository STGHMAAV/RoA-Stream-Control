import * as React from 'react';

export interface SkinSelectorProps {
    selectedChar: string;
}

export interface SkinSelectorState {
    numberSkins: number;
    buttons: JSX.Element[];
}

export default class SkinSelector extends React.Component<SkinSelectorProps, SkinSelectorState> {

    constructor(props: Readonly<SkinSelectorProps>) {
        super(props);

        let options = this.buttonsGenerator(this.props.selectedChar, 0);

        this.state = {
            numberSkins: options.nSkins,
            buttons: options.skins
        };
    }

    /**
     * Given a character, returns how many skins it has, and the buttons for each skin
     * @param selectedChar selectedChar: Selected Character for the player
     * @param selected selected: Which skin has been selected
     * @returns nSkins: number of skins for the character || skins: buttons for each skin of the character
     */
    public buttonsGenerator(selectedChar: string, selected?: number): { nSkins: number, skins: JSX.Element[] } {
        let numberSkins = selectedChar.toLocaleLowerCase().includes('mii') ? 1 : 8;
        let buttons = [];

        for (let i = 0; i < numberSkins; ++i) {
            buttons.push(<input onClick={this.onClick.bind(this)}
                disabled={i === (selected ? selected : 0)} style={{ opacity: i === 0 ? 0.5 : 1 }}
                key={`${selectedChar}_${i}`} value={i} type="image" alt={i.toString()}
                src={require(`./../stockIcons/${selectedChar.toLowerCase()}_${i}.png`)} />);
        }

        return { nSkins: numberSkins, skins: buttons };
    }

    public onClick(ev: React.MouseEvent<HTMLInputElement, MouseEvent>): void {
        ev.preventDefault();

        let options = this.buttonsGenerator(this.props.selectedChar, parseInt(ev.currentTarget.value));
        this.setState({
            numberSkins: options.nSkins,
            buttons: options.skins
        });
    }


    public componentWillUpdate(nextProps: any) {
        let { selectedChar } = this.props;
        if (nextProps.selectedChar && selectedChar && nextProps.selectedChar !== selectedChar) {
            
            let options = this.buttonsGenerator(nextProps.selectedChar, 0);

            this.setState({
                numberSkins: options.nSkins,
                buttons: options.skins
            });
        }
    }

    public render() {
        let { buttons } = this.state;

        return (
            <div className={'skinselector'} >
                {buttons}
            </div>
        )
    }
}