import React from 'react'
import Business from './Business'

const data = ['']

function BusinessList() {
  return (
    <>
      <ul>
        {data.map((business) => (
          <li>
            <Business id={business.id} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default BusinessList
