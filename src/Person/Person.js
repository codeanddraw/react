import React from 'react';

const person = (props) => {
    return (
    <div><p onClick={props.click}>I am  {props.name} and {props.age} old {Math.floor(Math.random() *30 ) }years old</p>
        <p>{props.children}</p>
    </div>

    )
};

export default person;