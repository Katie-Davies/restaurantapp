import React from 'react'

function SearchBar() {
  return (
    <>
      <form>
        <button>Best Match</button>
        <button>Highest Rated</button>
        <button>Most Reviewed</button>
        <input type="text" placeholder="Search business" />
        <input type="text" placeholder="where?" />
        <button type="submit">Let's Go</button>
      </form>

      {/* Best Match, Highest Rated, and Most Reviewed. */}
    </>
  )
}

export default SearchBar
