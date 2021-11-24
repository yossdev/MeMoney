import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Manager from './pages/Manager'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Manager />} />
      </Routes>
    </Router>
  )
}

export default App
