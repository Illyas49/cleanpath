import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Framework } from './pages/Framework';
import { Reviews } from './pages/Reviews';
import { EvaluationAreas } from './pages/EvaluationAreas';
import { About } from './pages/About';
import { Access } from './pages/Access';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/framework" element={<Framework />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/evaluation-areas" element={<EvaluationAreas />} />
            <Route path="/about" element={<About />} />
            <Route path="/access" element={<Access />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
