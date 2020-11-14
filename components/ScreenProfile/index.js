
import React from 'react';
import GroupCard from '../GroupCard';
import EditIcon from '@material-ui/icons/Edit';
import PersonIcon from '@material-ui/icons/Person';

import './index.scss';

const temp = {
field: ['Marketing', 'It', 'Front-end', 'Back-end']
}

function ScreenProfile({ firstName, lastName  }) {
    
    return (
        <div className='profile'>
            <div className='profile__img'>
                <PersonIcon style={{margin: 'auto', fontSize: '5rem'}} fontSize='large'/>
            </div>
            <div className='profile__info'>
                <div className='profile__info__name'>
                    <h1>{firstName + " " + lastName}</h1>
                </div>
                <a>Change password</a>
                <h2>Your group: </h2>
                <div className='profile__info__group'>
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