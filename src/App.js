import React from 'react';
import './Experience.css';
import './Experience.js';
import experience from './Experience.js';
import Header from './Header.js';
import './Header.css';
import Footer from './Footer.js';
import './Footer.css';

function App() { 

  let experienceList = experience.map( (experience) => {
    return (
      <div class="experience">
      
      <p className={"contact"} ></p>
        <h1>{experience.companyName}</h1>
        <h2>{experience.jobTitle}</h2>
        <p>{experience.description}</p>
      </div>

  )})

  return (
    <div>
   <Header />
          {experienceList}
          <footer> <Footer /> </footer>
    </div>
  )
}

export default App;
