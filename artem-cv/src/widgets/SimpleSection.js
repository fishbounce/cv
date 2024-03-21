import React from 'react';

const SimpleSection = ({title, text}) => {
    return (
        <div className='section'>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    );
}

export default SimpleSection;