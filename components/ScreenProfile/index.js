
import React from 'react';
import GroupCard from '../GroupCard';
import './index.scss';

const temp = {
field: ['Marketing', 'It', 'Front-end', 'Back-end']
}

function ScreenProfile({ firstName, lastName  }) {

    return (
        <div className='ctn'>
            <div className='ctn__img'>

            </div>
            <div className='ctn__info'>
                <div className='ctn__info__name'>
                    <h1>{firstName + " " + lastName}</h1>
                </div>
                <h2>Group joined: </h2>
                <div className='ctn__info__group'>
                {temp.field.map((item) => (
                    <GroupCard 
                        field={item}
                    />
                ))}
                </div>
            </div>
        </div>
    );
}


export default ScreenProfile;