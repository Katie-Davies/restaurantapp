import React from 'react'
import './Styles/SearchBar.css'

function SearchBar() {
  return (
    <>
      <form>
        <div className="search-buttons">
          <button>Best Match</button>
          <button>Highest Rated</button>
          <button>Most Reviewed</button>
        </div>
        <hr />
        <div className="search-form">
          <input type="text" placeholder="Search business" className="input" />
          <input type="text" placeholder="where?" className="input" />
          <button type="submit" className="button">
            Let's Go
          </button>
        </div>
      </form>
    </>
  )
}

export default SearchBar
