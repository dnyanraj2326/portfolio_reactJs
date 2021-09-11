import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home/Home';
import Skill from './Pages/Skill/Skill';
import Experience from './Pages/Experience/Experience';
import RecentPosts from './Pages/RecentPosts/RecentPosts';
import Projects from './Pages/Projects/Projects';
import RecentProject from './Pages/RecentProject/RecentProject';
import PopularTopics from './Pages/PopularTopics/PopularTopics';
import Contact from './Pages/Contact/Contact';
import Footer from './Components/Footer';
import React from 'react';

function App() {
 
  return (
    <>
      <Navbar />
      <Home />
      <Skill />
      <Experience />
      <RecentPosts />
      <Projects />
      <RecentProject />
      <PopularTopics />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
