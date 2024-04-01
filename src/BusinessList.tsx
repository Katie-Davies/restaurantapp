import React from 'react'
import Business from './Business.tsx'

const data = [{ id: 2, name: 'Baduzzis' }]

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
