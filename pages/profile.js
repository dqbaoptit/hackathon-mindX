import React from 'react';
import { ScreenProfile } from '../components';
;

const temp = {
    firstName: 'Le',
    lastName: 'Quoc Viet'
}

function Profile() {
    return (
        <div style={{display: 'flex'}}>
            <ScreenProfile 
                firstName={temp.firstName}
                lastName={temp.lastName}
            />
        </div>
    );
}

export default Profile;