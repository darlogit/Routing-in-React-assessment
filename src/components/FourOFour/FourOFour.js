import React from 'react';
function FourOFour(props) {
    let name = props.match.params.name || props.name; 
    return (
        <div className = "FourOFour">
            <h1> 404 Error</h1>
        </div>
    );
}
export default FourOFour;
