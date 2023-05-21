import { useState } from 'react'
import './App.css'
import { LoginPage } from './pages/LoginPage'
import { MainPage } from './pages/MainPage'


function App() {
  const [ loggedIn ] = useState<boolean>(false)

  return (
    <div className="App">
      {!loggedIn && <LoginPage />}
      {loggedIn && <MainPage />}
    </div>
  );
}

export default App;
