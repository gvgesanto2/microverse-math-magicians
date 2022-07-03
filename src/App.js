import { Route, Routes } from 'react-router-dom';

import './App.scss';
import Header from './components/header/header.component';
import CalculatorPage from './pages/calculator-page/calculator-page.component';
import HomePage from './pages/homepage/homepage.component';
import QuotePage from './pages/quote-page/quote-page.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quote" element={<QuotePage />} />
      </Route>
    </Routes>
  );
}

export default App;
