import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Project1 from './pages/Project2';
import Project2 from './pages/Project3';
import Project3 from './pages/Project4';
import Project4 from './pages/Projecttbd';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Header from './pages/Header';
import Footer from './pages/Footer';
import '../assets/css/style.css'


export default function PortfolioContainer() {

  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
 
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Home') {
      return <Home/>;
    }
    if (currentPage === 'Project1') {
      return <Project />;
    }
    if (currentPage === 'Project2') {
      return <Project1 />;
    }
    if (currentPage === 'Project3') {
      return <Project2 />;
    }
    if (currentPage === 'Project4') {
      return <Project3 />;
    }
    if (currentPage === 'Project5') {
      return <Project4 />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    
    <div>
      <Header />
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />
    
 
    </div>
 
  );
}
