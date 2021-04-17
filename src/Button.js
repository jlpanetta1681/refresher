import React from 'react'

function Button() {
    let myClick = function () {
        alert('You clicked the button!')
    }

    return (
        <div id="button row">
            <button id="My button" onClick={myClick}>Press me</button>
            <button id="My button" onClick={myClick}>Press me</button>
        </div>
    )
}
export default Button