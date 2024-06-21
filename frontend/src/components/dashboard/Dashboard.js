import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Problem from '../problems/Problem';
import Contest from '../contest/Contest';
import Blog from '../blogs/Blogs';

const Dashboard = () => {
  return (
    <>
    <Navbar />
      <Routes>
      
        <Route path="/problem" element={<Problem />} />
        <Route path="/contest" element={<Contest />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  )
}

export default Dashboard;
