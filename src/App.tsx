import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import ProjectPage from 'pages/ProjectPage';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/project/:projectId" element={<ProjectPage />} />
                <Route path="/project" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
