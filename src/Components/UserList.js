    import React, {useEffect, useState} from "react";

    import axios from "axios";

    const UserList = () => {
        const [users, setUsers] = useState([])


        useEffect(() => {
            axios('https://jsonplaceholder.typicode.com/users')
                .then(({data}) => {
                    setUsers(data)
                    console.log(data)
                })
        }, []);

        const deleteUser = (userId) => {
            const updatedUsers = users.filter(user => user.id !== userId);
            setUsers(updatedUsers);
        };

        return (
            <>

                        {
                            users.map((user, idx) => (
                            <div className={'cardWrapper'} key={idx}>
                                <div className={'cardBtn'}>
                                    <button className={'delete'} onClick={() => deleteUser(user.id)}>Х</button>
                                </div>
                                <h2>{user?.name}</h2>
                                <h6>{user?.username}</h6>
                                <p className={'email'}>{user?.email}</p>
                                <p className={'address'}>{user?.address.street}, {user?.address.suite}, {user?.address.city}</p>
                                <p className={'number'}>{user?.phone}</p>
                            </div>
                        ))
                        }

            </>
        )
    }

    export default UserList