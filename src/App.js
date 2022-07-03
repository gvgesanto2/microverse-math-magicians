import { Route, Routes } from 'react-router-dom';

import './App.scss';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
