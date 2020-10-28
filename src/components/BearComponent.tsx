import React from "react"

type Props = {};

type State = {
    bears: number;
};

export class BearComponent extends React.Component<Props, State>{
    constructor(props: {}){
        super(props);
        this.state = { bears: 0 };
    }

    render(){
        return(
            <>
                <span> {`${this.state.bears} Bears`} </span>

                <button
                data-testid="increase-button"
                onClick={() => {
                    this.setState({bears: this.state.bears + 1});
                }}
                >
                Addopt a new bear!
                </button>

                <button
                data-testid="decrease-button"
                onClick={() => {
                    this.setState({bears: this.state.bears - 1});
                }}
                >
                Free a bear!
                </button>
            </>
        );
    }

}