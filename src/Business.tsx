import React from 'react'
import './Styles/BusinessList.css'

const data = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  postCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90,
}

function Business() {
  return (
    <>
      <div className="card">
        <img src={data.imageSrc} alt="pizza"></img>
        <h1>{data.name}</h1>
        <div className="container">
          <div>
            <p>{data.address}</p>
            <p>{data.city}</p>
            <p>{data.state}</p>
            <p>{data.postCode}</p>
          </div>
          <div>
            <p>{data.category}</p>
            <p>{data.rating}</p>
            <p>{data.reviewCount}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Business
