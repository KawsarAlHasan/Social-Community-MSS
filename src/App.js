import './App.css'
import { useSelector } from 'react-redux/es/exports'
import Auth from './pages/Auth/Auth'
import Home from './pages/home/Home'
import Profile from './pages/Profile/Profile'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyle } from './components/Theme/Themes'
import Chat from './pages/Chat/Chat'

const StyleApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`

function App() {
  const [theme, setTheme] = useState('light')

  const themeTogler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const user = useSelector((state) => state.authReducer.authData)
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <StyleApp>
        <div className="App">
          <div className="blur" style={{ top: '-18%', right: '25px' }}></div>
          <div style={{ marginTop: '-10px', marginLeft: '98%', zIndex: '1' }}>
            <button onClick={() => themeTogler()}>
              {theme === 'light' ? 'Dark' : 'Light'}
            </button>
          </div>
          <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>

          <Routes>
            <Route
              path="/"
              element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
            />
            <Route
              path="/home"
              element={user ? <Home /> : <Navigate to="../auth" />}
            />
            <Route
              path="/auth"
              element={user ? <Navigate to="../home" /> : <Auth />}
            />
            <Route
              path="profile/:id"
              element={user ? <Profile /> : <Navigate to="../auth" />}
            />
            <Route
              path="chat"
              element={user ? <Chat /> : <Navigate to="../auth" />}
            />
          </Routes>
        </div>
      </StyleApp>
    </ThemeProvider>
  )
}

export default App
