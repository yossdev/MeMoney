import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Auth0ProviderWithNavigate from './Auth0/auth0Provider'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store/store'

import MeMoneyDash from './pages/MeMoneyDash'
import LandingPage from './pages/LandingPage'
import Charts from './pages/MeMoneyDash/Charts'
import About from './pages/LandingPage/About'
import Page404 from './pages/Errors/Page404'
import ProfilePage from './pages/ProfilePage'
import Welcome from './pages/LandingPage/Welcome'
import Manager from './pages/MeMoneyDash/Manager'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Auth0ProviderWithNavigate>
            <Routes>
              <Route path="/" element={<LandingPage />}>
                <Route index element={<Welcome />} />
                <Route path="about" element={<About />} />
              </Route>
              <Route path="/manager" element={<MeMoneyDash />}>
                <Route index element={<Manager />} />
                <Route path="charts" element={<Charts />} />
                <Route path="profile" element={<ProfilePage />} />
              </Route>
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Auth0ProviderWithNavigate>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
