import React from 'react'
import ArtListItem from "./ArtListItem"
const ArtList = (props) => {
    return (
        <ul class="art-list">
            {props.artworks.map((item) =>
                (<ArtListItem item={item} />)
            )
            }
        </ul>
    )
}

export default ArtList
