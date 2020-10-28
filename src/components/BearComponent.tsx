import React,  {useState} from "react"

export const BearComponent = () => {

    const [bears,setNumberOfBears] = useState(0);

    return(
        <>
            <span> {`${bears} Bears`} </span>

            <button
            data-testid="increase-button"
            onClick={() => {
                setNumberOfBears(bears + 1);
            }}
            >
                Addopt a new bear!
            </button>

            <button
            data-testid="decrease-button"
            onClick={() => {
                setNumberOfBears(bears - 1);
            }}
            >
                Free a bear!
            </button>
        </>
    );
}