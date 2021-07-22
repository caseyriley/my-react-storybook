import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './ButtonColor.css'

export default function ButtonColor({ task: {id}}) {
    const [colorState, setColorState] = useState('red');
    function nextColor(){
        let color = colorState;
        if (color === 'red') color = 'orange';
        else if (color === 'orange') color = 'yellow';
        else if (color === 'yellow') color = 'green';
        else if (color === 'green') color = 'blue';
        else if (color === 'blue') color = 'indigo';
        else if (color === 'indigo') color = 'purple';
        else color = 'red';
        setColorState(color);
    }
    return (
        <div className={`button-color ${colorState}`} onClick={nextColor} >
            Choose color
        </div>
    )
}

Task.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
    }),
    nextColor: PropTypes.func,
}