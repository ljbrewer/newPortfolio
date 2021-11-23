import React from 'react';
import DayPlanner from '../../assets/images/DayPlanner.png'

export default function Blog() {
  return (
    <div>
      <h2>Day Planner</h2>
      <section className="row justify-center">
      <div className="project-column">
        <figure className="project box-project" >
          <h2 className="project-header">Day Planner</h2>
         <div className="project-body">
          <p>This Day Planner is for the current day. You can fill it in with items on your schedule to help keep you on track for your day. If you close the page, when you reopen it the data you entered will still be on the page.
          </p>
        </div>
            <img src={DayPlanner} alt="DayPlanner" className="image"></img>
        <p>
        <a href="https://ljbrewer.github.io/DayPlanner/">DayPlanner GitHub Repository</a>
        </p>
            <p>
              <a href="https://ljbrewer.github.io/DayPlanner/">Day Planner Deployed App</a>
            </p>
      </figure>
    </div>
    </section>
  </div>
  );
}
