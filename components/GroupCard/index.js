
import React from 'react';
// import './index.scss';


function GroupCard({field}) {
    return (
        <div style={{
                width: '10rem',
                height: '5rem',
                backgroundColor: 'rgb(160, 7, 145)',
                borderRadius: '50px',
                margin: '2rem 2rem 2rem 0',
                
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                cursor: 'pointer',
            }}
        >
            <h2 style={{color: 'white'}}>{field}</h2>
        </div>
    );
}

export default GroupCard;