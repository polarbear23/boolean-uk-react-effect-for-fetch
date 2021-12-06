import React from 'react'
import FavouriteListItem from './FavouriteListItem'
const FavouriteSlipsList = (props) => {
    return (
        <section class="favourite-slips-list">
            <h3>Favourite Advice Slips</h3>
            <ul>
                {props.favouriteAdvice.map((slip) => {
                    return <FavouriteListItem slip={slip} />
                })}
            </ul>
        </section>
    )
}

export default FavouriteSlipsList
