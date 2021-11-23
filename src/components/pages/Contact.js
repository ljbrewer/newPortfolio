import React from 'react';
import lolopic from '../../assets/images/loloridingsm.jpg'
export default function Contact() {
  return (
    <div>
      <div className="project-column "></div>
      <ul className="box-project">  <img src={lolopic} alt="Laura"></img>
      <li>
        <a href="mailto: ljbrewer@pacbell.net" target="_self">Send Email to ljbrewer@pacbell.net</a>
      </li>
      <li>
        Cell number: 707-372-1718
      </li>
      <li>
        <a href="http://www.linkedin.com/in/laura-brewer-457b643" target="_self">www.linkedin.com/in/laura-brewer-457b643</a>
      </li>
      <li><a href="assets/Brewer_Laura_Res_Final.pdf">Laura's Current Resume</a></li>
    </ul>
    </div>
  );
}
