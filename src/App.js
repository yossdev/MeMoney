import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import MeMoneyPage from './pages/MeMoneyPage'
import LandingPage from './pages/LandingPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="manager" element={<MeMoneyPage />} />
      </Routes>
    </Router>
  )
}

export default App
