import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainNavigation from './components/MainNavigation';
import WorkoutsPage from './components/WorkoutsPage';
import CaloriesPage from './components/CaloriesPage';
import ProfilePage from './components/ProfilePage';
import SettingsPage from './components/SettingsPage';

function App() {
  return(
    <Router>
      <MainNavigation/>
      <Routes>
        <Route path="/workouts" element={< WorkoutsPage />} />
        <Route path="/calories" element={< CaloriesPage />} />
        <Route path="/profile" element={< ProfilePage />} />
        <Route path="/settings" element={< SettingsPage />} />
      </Routes>
    </Router>
  )
}

export default App;
