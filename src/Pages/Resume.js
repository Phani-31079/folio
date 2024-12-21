// src/Resume.js
import React, { useEffect } from 'react';
import { resume } from '../Details';

const Resume = () => {
  useEffect(() => {
    window.location.href = resume.link;
  }, []);

  return (
    <div>
      <h2>Redirecting to Resume...</h2>
    </div>
  );
};

export default Resume;
