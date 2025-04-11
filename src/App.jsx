import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home/Home';
import CardDetails from './pages/CardDetails/CardDetails';
import AppealsPage from './pages/AppealsPage/page';
import ProjectsPage from './pages/AppealsPage/ProjectAppealsPage/page';
import MentoriumsPage from './pages/AppealsPage/MentoriumAppealsPage/page';



function App() {

  return (
    <div className='custom-container-fluid-clamped custom-container-centered'>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/cardDetails" element={<CardDetails />} />
        <Route path="/appeals" element={<AppealsPage />}>
          <Route index element={<ProjectsPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="mentoriums" element={<MentoriumsPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
