import React from 'react'

const AdviceSlip = (props) => {

    const handleClick = async () => {
        const fetchIt = await fetch("https://api.adviceslip.com/advice");
        const data = await fetchIt.json();
        props.setAdvice(data.slip.advice)
    }
    return (
        <section class="advice-slip">
            <h3>Some Advice</h3>
            <p>{props.advice}</p>
            <button onClick={handleClick}>Get More Advice</button>
            <button onClick={() => props.setFavouriteAdvice([...props.favouriteAdvice, props.advice])}>Save to Favourties</button>
        </section>
    )
}

export default AdviceSlip
