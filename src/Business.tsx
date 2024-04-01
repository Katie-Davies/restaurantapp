import React from 'react'

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
      <h1>{data.name}</h1>
      <img src={data.imageSrc} alt="pizza"></img>
      <p>{data.address}</p>
      <p>{data.city}</p>
      <p>{data.state}</p>
      <p>{data.postCode}</p>
      <p>{data.category}</p>
      <p>{data.rating}</p>
      <p>{data.reviewCount}</p>
    </>
  )
}

export default Business
