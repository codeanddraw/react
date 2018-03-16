import React from 'react';

const person = (props) => {
    return <p>I am  {props.name} and {props.age} old {Math.floor(Math.random() *30 ) }years old</p>
};

export default person;