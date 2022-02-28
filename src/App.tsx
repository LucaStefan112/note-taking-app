import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import './style/css/app.css'
import './style/css/fonts.css'

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}
