import { Route, Routes } from 'react-router'
import './App.css'

import HomePage from '@/pages/HomePage/page'
import CardDetailsPage from '@/pages/CardDetailsPage/CardDetails';
import ApplicationsPage from '@/pages/ApplicationsPage/page';
import ProjectApplicationsPage from '@/pages/ApplicationsPage/ProjectApplicationsPage/page';
import MentoriumApplicationsPage from '@/pages/ApplicationsPage/MentoriumApplicationsPage/page';
import SavedPage from './pages/ApplicationsPage/SavedPage/page';
import ActivityPage from './pages/ApplicationsPage/ActivityPage';
import CreateMentoriumPage from './pages/CreateMentoriumPage/page';



function App() {

  return (
    <div className='custom-container'>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/cardDetails" element={<CardDetailsPage />} />
        <Route path="/createMentorium" element={<CreateMentoriumPage />}></Route>
        <Route path="/applications" element={<ApplicationsPage />}>
          <Route index element={<ProjectApplicationsPage />} />
          <Route path="projects" element={<ProjectApplicationsPage />} />
          <Route path="mentoriums" element={<MentoriumApplicationsPage />} />
          <Route path="saved" element={<SavedPage />} />
          <Route path="activity" element={<ActivityPage />} />
        </Route>
      </Routes>
    </div>

  )
}

export default App
