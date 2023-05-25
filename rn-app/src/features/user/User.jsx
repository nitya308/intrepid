import React from 'react';
import { useSelector } from 'react';

const User = () => {
    const [user, setUser] = useSelector(state => state.user.user);

    return <div>{user.name}</div>;
}

export default User;