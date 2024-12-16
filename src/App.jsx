import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import ChallengePage from './pages/ChallengePage';

function App() {
  return (
    // <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} /> 
          <Route path="/challenge" element={<ChallengePage />} /> 
        </Route>
      </Routes>
    // </Router>
  )
}

export default App
