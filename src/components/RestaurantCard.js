const styleCard = {
    backgroundColor: '#f0f0f0'
}

// In JSX inline style is just a javascript object
const RestaurantCard = ({ src, name, cuisnes, rating, deliveryTime }) => {
    return (
        <div className='res-card' style={styleCard}>
            <img className='res-logo' src={src} alt='res-logo' />
            <h3>{name}</h3>
            <h4>{cuisnes}</h4>
            <h4>{rating}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
}

export default RestaurantCard