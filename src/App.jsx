import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import ChallengePage from './pages/ChallengePage';
import CustomPage from './pages/CustomPage';
import SettingsPage from './pages/SettingsPage';
function App() {
  return (
    // <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} /> 
          <Route path="/challenge" element={<ChallengePage />} />
          <Route path="/challenge/:id" element={<ChallengePage />} />
          <Route path="/custom" element={<CustomPage />} />
          <Route path="/setting" element={<SettingsPage />} />

        </Route>
      </Routes>
    // </Router>
  )
}

export default App
