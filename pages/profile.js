import React, {useEffect, useState} from 'react';
import { ScreenProfile } from '../components';
import { GetProfile } from '../redux/actions/profile';
;


function Profile() {
    const [user, setUser] = useState({});

    useEffect(()=>{
        async function getProfile(){
            const {data} = await GetProfile();
            setUser(data);
            console.log(data)
        }
        getProfile()
    },[])

    return (
        <div style={{display: 'flex'}}>
            <ScreenProfile 
                firstName={user.firstName}
                lastName={user.lastName}
            />
        </div>
    );
}

export default Profile;