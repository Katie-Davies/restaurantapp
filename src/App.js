import './Styles/App.css'

import BusinessList from './BusinessList.tsx'
import SearchBar from './SearchBar.tsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
      </header>
      <main>
        <BusinessList />
      </main>
    </div>
  )
}

export default App
