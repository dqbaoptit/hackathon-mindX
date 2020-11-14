
import React from 'react';
import './index.scss';


function GroupCard({field}) {
    return (
        <div className='group-card'>
            <h2>{field}</h2>
        </div>
    );
}

export default GroupCard;