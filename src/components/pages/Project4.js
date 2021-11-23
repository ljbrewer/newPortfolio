import React from 'react';
import demo from '../../assets/images/passgen.png'

export default function Blog() {
  return (
    <div>
      <h2> Password Generator</h2>
      <section className="row justify-center">
         <div className="project-column">
          <figure className="project box-project" >
         
            <h2 className="project-header">Password Generator</h2>
            <div className="project-body">
            <p>The Password Generator lets the user decide which type of characters they want in their password and they choose the length as well. Once the items have been chosen then it presents the user with a new password.</p>
          </div>
            <img src={demo} alt="Password Generator" className="image"></img>
          <p>
          <a href="https://ljbrewer.github.io/PasswordGenerator/">Password Generator Github Respository</a>
          </p>
            <p>
              <a href="https://ljbrewer.github.io/PasswordGenerator/">Password Generator Deployed App</a>
            </p>
        </figure>
      </div>
      </section>
    </div>
  );
}
