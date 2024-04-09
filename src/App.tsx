import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Project from 'pages/Project';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project" element={<Project />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
