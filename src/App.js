import './App.css'
import ProfileCard from './components/ProfileCard/ProfileCard'

function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: '-18%', right: '0' }}></div>
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
      <ProfileCard />
    </div>
  )
}

export default App
