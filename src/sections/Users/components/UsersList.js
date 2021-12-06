import React from 'react'
import UsersListItem from './UsersListItem'
const UsersList = (props) => {
    return (
        <ul class="users-list">
            {props.users.map((user) => {
                return <UsersListItem user={user} />
            }
            )
            }



        </ul>
    )
}

export default UsersList
