import { Route, Routes } from 'react-router'
import './App.css'

import HomePage from './pages/HomePage/Home'
import CardDetailsPage from '@/pages/CardDetailsPage/CardDetails';
import ApplicationsPage from '@/pages/ApplicationsPage/page';
import ProjectApplicationsPage from '@/pages/ApplicationsPage/ProjectApplicationsPage/page';
import MentoriumApplicationsPage from '@/pages/ApplicationsPage/MentoriumApplicationsPage/page';



function App() {

  return (
    <div className='custom-container'>

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/cardDetails" element={<CardDetailsPage />} />
        <Route path="/applications" element={<ApplicationsPage />}>
          <Route index element={<ProjectApplicationsPage />} />
          <Route path="projects" element={<ProjectApplicationsPage />} />
          <Route path="mentoriums" element={<MentoriumApplicationsPage />} />
        </Route>
      </Routes>
    </div>

  )
}

export default App
