import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import MeMoneyDash from './pages/MeMoneyDash'
import LandingPage from './pages/LandingPage'
import Charts from './pages/MeMoneyDash/Charts'
import About from './pages/LandingPage/About'
import Page404 from './pages/Errors/Page404'
import ProfilePage from './pages/ProfilePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<About />} />
        <Route path="manager" element={<MeMoneyDash />} />
        <Route path="charts" element={<Charts />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  )
}

export default App
