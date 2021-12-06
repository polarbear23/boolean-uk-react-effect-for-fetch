import React from 'react'
const SubjectList = (props) => {
    return (
        <ul>
            {props.subjects.map((subject) => {
                return <li>{subject}</li>
            })}
        </ul>
    )
}

export default SubjectList
