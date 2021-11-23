import React from 'react'; 
import lolopic from '../../assets/images/lolopicsm.png'

import '../../assets/css/style.css'

export default function Home() {
  return (
    <div>
      
      <section className="row justify-center">
      
        <div className="project-column">
         
          <figure className="project box-project" >
         <h4>Laura Brewer</h4>
          <img src={lolopic} alt="Laura" ></img>
          
            <h2 className="project-header">Accomplished IT Professional</h2>
            <div className="project-body">
              <p>      Accomplished IT professional with expertise in diverse technologies within multiple industry settings.Demonstrated success managing Networking, Software Engineering, QA, Change Management, Service Delivery, Information Security, and Technical Support.Effective in implementing standards and processes that improve business functionality.Innovative leader and technology advocate able to integrate systems and application services to maximize efficiency and performance.Currently, working on Web Design.
              </p>
            </div>
          </figure>
        </div>
      </section >
    </div >
  );
}
