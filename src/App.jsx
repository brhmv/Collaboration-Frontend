import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home/Home';
import CardDetails from './pages/CardDetails/CardDetails';



function App() {

  return (
    <>
        <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/cardDetails" element={<CardDetails />} />
      </Routes>
    </>
  )
}

export default App
