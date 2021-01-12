import React, { Component } from "react";

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <h1>About Me</h1>
          <div className="three columns">
            <img className="profile-pic" src="images/mypic1.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            {resumeData.aboutme &&
              resumeData.aboutme.map((item) => {
                return (
                  <React.Fragment key={item.name}>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                  </React.Fragment>
                );
              })}
             <div className="download">
            <a href="/files/Resume.pdf" target="_blank" rel="noferrer" className="button">Download Resume</a>
          </div>
          </div>
         
        </div>
      </section>
    );
  }
}
