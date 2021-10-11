import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import Header from './components/Header';
import TopContainer from './components/TopContainer';
import StudentsContainer from './components/StudentsContainer';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="app-container-inner">
        <div className="modify-container">
          <TopContainer />
        </div>
        <StudentsContainer />
      </div>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));
