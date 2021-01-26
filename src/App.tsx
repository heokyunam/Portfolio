import React from 'react';
import './App.css';
import Intro from './components/Intro/Intro';
import CompanyProjects from './components/CompanyProjects/CompanyProjects';
import PersonalProjects from './components/PersonalProjects/PersonalProjects';
import History from './components/History';

function App() {
  return (
    <div className="container">
      <Intro />
      <PersonalProjects />
      <CompanyProjects />
      <History />
    </div>
  );
}

export default App;
