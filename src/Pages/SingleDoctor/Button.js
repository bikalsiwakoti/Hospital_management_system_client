import * as React from 'react';

function ButtonBlue(props) {
    const blue = {
        marginTop: '6px',
        padding: '1rem 2.2rem',
        border: 'none',
        backgroundColor: '#144580',
        color: '#ffffff',
        borderRadius: '5px',
        fontSize: '1.3rem',
        transition: 'all 0.2s',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        marginRight: '1rem'
        
    }
    return (
        <>
            <button style={blue} type={props.type} onClick={props.onClick} >{props.name} </button>
        </>
    );
};


function ButtonWhite(props) {
    const white = {
        marginTop: '6px',
        padding: '0.9rem 1.6rem',
        border: '2px solid #144580',
        backgroundColor: '#ffffff',
        color: '#144580',
        borderRadius: '5px',
        fontSize: '1.3rem',
        fontWeight: '500',
        transition: 'all 0.2s',
        cursor: 'pointer',
        marginRight: '1rem'
    }
    return (
        <>
            <button style={white} type={props.type} onClick={props.onClick}>{props.name}</button>
        </>
    );
};

export { ButtonBlue, ButtonWhite }
