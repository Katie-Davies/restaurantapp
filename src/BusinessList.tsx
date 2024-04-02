import React from 'react'
import Business from './Business.tsx'
import './Styles/BusinessList.css'
const data = [{ id: 2, name: 'Baduzzis' }]

function BusinessList() {
  return (
    <div className="flex-grid">
      {data.map((business) => (
        <div className="col">
          <Business id={business.id} />
        </div>
      ))}
    </div>
  )
}

export default BusinessList
