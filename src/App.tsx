import React from 'react';
import './App.css';
import Intro from './components/Intro/Intro';
import CompanyProjects from './components/CompanyProjects/CompanyProjects';
import PersonalProjects from './components/PersonalProjects/PersonalProjects';
function App() {
  return (
    <div className="container">
      <Intro />
      <CompanyProjects />
      <PersonalProjects />
    </div>
  );
}

export default App;
