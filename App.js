import React from 'react'
import ReactDOM from 'react-dom/client'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5297921.png" alt="logo" />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const styleCard = {
  backgroundColor: '#f0f0f0'
}

const restaurantList = [
  {
    name: "Barbeque Nation",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fmoykif0fxrlc2l8tdos",
    cuisnes: 'North Indian, Barbecue, Biryani',
    rating: '3.8',
    deliveryTime: '35-40 minutes'
  },
  {
    name: "Pizza Hut",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
    cuisnes: 'Pizzas',
    rating: '3.8',
    deliveryTime: '45-50 minutes'
  },
  {
    name: "Chinese Wok",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
    cuisnes: 'Chinese, Asian, Tibetan, Dessert',
    rating: '4.1',
    deliveryTime: '35-40 minutes'
  },
  {
    name: "UBQ by Barbeque Nation",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/srupmcvgexew1ctmsgwo",
    cuisnes: 'North Indian, Barbecue, Biryani',
    rating: '4',
    deliveryTime: '35-40 minutes'
  },
  {
    name: "BOOM Sandwich - Sub of India",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/96aaf72372ad1b0297b7cc304ced7e33",
    cuisnes: 'snacks, Indian, Deseerts',
    rating: '4.3',
    deliveryTime: '21-31 minutes'
  },
  {
    name: "Domino's Pizza",
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d0450ce1a6ba19ea60cd724471ed54a8",
    cuisnes: 'Pizzas, Italian, Pastas, Desserts',
    rating: '4.1',
    deliveryTime: '35-40 minutes'
  }
]

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

const Body = () => {
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>
        {restaurantList.map((restaurantList) => {
          return (
            <RestaurantCard
              src={restaurantList.src}
              name={restaurantList.name}
              cuisnes={restaurantList.cuisnes}
              rating={restaurantList.rating}
              deliveryTime={restaurantList.deliveryTime}
            />
          )
        })}
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)