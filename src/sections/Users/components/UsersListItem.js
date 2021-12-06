import React from 'react'

const UsersListItem = (props) => {
    return (
        <li class={props.user.gender === "male" ? "bg-blue" : "bg-pink"}>
            <img
                src={props.user.picture.medium}
                alt={`${props.user.name.first} ${props.user.name.last}`}
            />
            <h3>{`${props.user.name.title} ${props.user.name.first} ${props.user.name.last}`}</h3>
            <p>Email: {props.user.email}</p>
        </li>
    )
}

export default UsersListItem
