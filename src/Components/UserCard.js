import React from "react";
import UserList from "./UserList";

const UserCard = () => {
    return (
        <>
            <div className={'main'}>
                <div className="container">
                    <div className={'mainWrapper'}>
                        <h1 className={'title'}>User</h1>
                        <div className={'mainInner'}>
                            <input type="text"/>
                            <span className={'inputBorder'}></span>
                            <button>Ok</button>
                        </div>
                        <div className={'card'}>
                            <UserList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserCard