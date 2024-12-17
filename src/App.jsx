import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import RightSidebar from './components/RightSidebar';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="content-wrapper">
        <Sidebar />
        <MainContent />
        <RightSidebar />
      </div>
      <Footer />
    </div>
  );
};

export default App;
