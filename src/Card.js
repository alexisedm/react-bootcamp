import React from "react"
import PropTypes from "prop-types"

//Pop Types like is required that prop in component
function Card(props) {
    const styles = {
        backgroundColor: props.cardColor,
        height: props.height,
        width: props.width
    }
    
    return (
        <div style={styles}></div>
    )
}

Card.propTypes = {
    cardColor: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number
}

Card.defaultProps = {
    height: 100,
    width: 100
}

export default Card

/*
function Card(props) {

    const styles = {
        backgroundColor: props.cardColor,
        height: props.height,
        width: props.width
    }
    
    return (
        <div style={styles}></div>
    )
}

//Provide default values to our components
//object default props with each value that we want
Card.defaultProps = {
    cardColor: "blue",
    height: "100",
    width: "100"
}

export default Card;
*/