import React from 'react';
import mainpage from '../../assets/images/mainpage.png'

export default function Blog() {
  return (
    <div>
      <h2>Animal Adoptions</h2>
       <section className="row justify-center">
      <div className="project-column">
        <figure className="project box-project" >
          <h2 className="project-header">Animal Adoptions</h2>
          <div className="project-body">
            <p>This website is designed for people who would like to adopt an animal - dogs, cats, or foxes. Once they choose an animal they can fill out the Adoption Form to be considered a pet parent. </p>
          </div>
            <img src={mainpage} alt=" Animal Adoption Website Main Page" className="image" ></img>
          <p>
          <a href="https://ljbrewer.github.io/AnimalAdoptions/">Animal Adoptions GitHub Respository</a>
          </p>
          <p>
          <a href="https://ljbrewer.github.io/AnimalAdoptions/">Animal Adoption Deployed App</a>
          </p>
        </figure>
      </div>
      </section>
    </div>
  );
}
