import React from 'react';

function Welcome(props) {
    console.log(props)

    // let name = props.match.params.name || props.name
    return (
        <div className="Welcom">
            Welcome, {props.name}!
        </div>
    )
}
export default Welcome;