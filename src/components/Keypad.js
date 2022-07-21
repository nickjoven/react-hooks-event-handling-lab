// Code Keypad Component Here
import React from "react";

const Keypad = () => {
    const passwordEntered = () => {
        console.log('Entering password...')
    }
    return (
        <div>
            <input type="password" onChange={passwordEntered} />
        </div>
    )
}

export default Keypad;