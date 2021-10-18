import React from 'react';
import './Socials.css';
const Socials = () => {
  return (
    <div className="footer ui ">
      <div className="ui container secondary menu">
        <div className="item">
          <a
            className="content"
            href="https://www.linkedin.com/in/samehothman/"
          >
            <i className="linkedin icon black big "></i>
          </a>
        </div>
        <div className="item">
          <a
            className="content"
            href="https://github.com/SamehEtman/Apex-legends-stats-tracker"
          >
            <i className="github icon black big"></i>
          </a>
        </div>
        <div className="item">
          <a className="content" href="mailto:samehothman20162017@gmail.com">
            <i className="envelope big black icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Socials;
