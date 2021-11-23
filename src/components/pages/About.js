import React from 'react';
import lolopic from '../../assets/images/Lolosm2.jpg'

export default function About() {
  return (
    <div>
      
     
      <section className="row justify-center">
        <div className="project-column">
          
        
          <figure className="project box-project" >   <h4>Laura Brewer</h4>
            <img src={lolopic} alt="Laura"></img>
          <h2 className="project-header">Accomplished IT Professional</h2>
            <div className="project-body">
              <p>
                <strong>Areas of Expertise: </strong>Incident Management | Project Management | Data Center & Server Support | Process Improvement | DHCP| Business Analysis | Team Leadership | Business Intelligence | Network Administration | Information & Network Security
                Data Migration & Analysis | Mailbox Migration | Business Continuity | Disaster Recovery | Metrics | HTML | CSS | JavaScript |MySql | MongoDB | React | NodeJS | Handlebars | Express | OOP | MERN | ORM |MVC
              </p>
            </div>
          </figure>
        </div>
      </section >
    </div >
  );
}
