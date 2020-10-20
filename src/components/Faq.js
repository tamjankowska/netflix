import React from 'react';

function Faq (props) {
    return (
        <div>
            <h2 id = "question">
                {props.question}
                <span id = "plus">{props.plus}</span>
            </h2>
        </div>
    )
    
}

export default Faq;