import React from 'react';
import Blog from '../Blog/Blog';
import Header from '../Header/Header/Header';
import Project from '../Project/Project/Project';
import Service from '../Services/Service/Service';
import Contact from '../Contact/Contact'

const Home = () => {
    return (
        <>
          <Header/>  
          <Service/>
          <Project/>
          <Blog/>
          <Contact/>
        </>
    );
};

export default Home;