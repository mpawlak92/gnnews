import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Content from './layout/Content/Content';
import Header from './layout/Header/Header';
import SideBar from './layout/SideBar/SideBar';

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/country/usa');
  }, []);
  return (
    <div className="App">
      <Header />
      <SideBar />
      <Routes>
        <Route path="/country/usa" element={<Content country="us" />} />
        <Route path="/country/germany" element={<Content country="de" />} />
        <Route path="/country/poland" element={<Content country="pl" />} />
        <Route path="/country/england" element={<Content country="gb" />} />
        <Route path="/country/france" element={<Content country="fr" />} />
        <Route path="/country/sweden" element={<Content country="se" />} />
        <Route path="/country/bulgaria" element={<Content country="bg" />} />
        <Route path="/country/norwey" element={<Content country="no" />} />
        <Route path="/country/china" element={<Content country="cn" />} />
        <Route path="/country/hungary" element={<Content country="hu" />} />
      </Routes>
    </div>
  );
}

export default App;
