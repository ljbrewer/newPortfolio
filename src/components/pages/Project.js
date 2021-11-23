import React from 'react';
import main from '../../assets/images/main.JPG'

export default function Blog() {
  return (
    <div>
     <h2> Home Inventory Database </h2>
      <section className="row justify-center">
      <div className="project-column">
        <figure className="project box-project" >          
          <h2 className="project-header">Home Inventory Database</h2>
          <div className="project-body">
            <p>This website is designed for people who would like to keep track of their homes and assets. This provides a way to track all the possessions in one or more homes with information about the cost and value of each item. Home owner's insurance policy number can also be recorded. </p>
          </div>
              <img src={main} alt="Home Inventory Website Main Page" className="image"></img>
          <p>            
          <a href="https://github.com/ljbrewer/HomeInventory">Home Inventory GitHub Repository</a>
          </p>
          <p>
              <a href="https://powerful-dawn-85424.herokuapp.com/">Home Inventory Deployed App</a>
          </p>
        </figure>
      </div>
      </section>
    </div>
  );
}
