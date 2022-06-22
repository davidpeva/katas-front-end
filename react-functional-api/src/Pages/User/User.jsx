//clase del 20-06-22
import React, { useEffect } from 'react'

const User = () => {

    useEffect((props) => {
        console.log('props', props);
    },[])
    
    return <h3>User</h3>
}

export default User;
