import React, { Component } from "react";

export default class resume extends Component {

  render() {
    let resumeData = this.props.resumeData;

    return (
      <div>
        <section id="resume">
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              {resumeData.education &&
                resumeData.education.map((item) => {
                  return (
                    <React.Fragment key={item.id}>
                      <div className="row item">
                        <div className="twelve columns">
                          <h3>{item.school}</h3>
                          <p className="info">
                            {item.degree} <span>&bull;</span>{" "}
                            {item.fieldofstudy}
                            <span>&bull;</span>{" "}
                            <em className="date">
                              {item.MonthOfPassing} {item.YearOfPassing}
                            </em>
                            <span>&bull;</span> {item.address}
                          </p>
                          <p>Achievements : {item.description}</p>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
            </div>
          </div>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Experience</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              {resumeData.work &&
                resumeData.work.map((item) => {
                  return (
                    <React.Fragment key={item.CompanyName}>
                      <div className="row item">
                        <div className="twelve columns">
                          <h3>{item.Title}</h3>
                          <p className="info">
                            {item.CompanyName}
                            <span>&bull;</span>{" "}
                            <em className="date">
                              {item.StartingMonthAndYear}- {item.MonthOfLeaving}{" "}
                              {item.YearOfLeaving}
                            </em>
                            <span>&bull;</span>{" "}{item.address}
                          </p>
                          <hr></hr>
                          <h1>
                            Roles & Responsibilities
                          </h1>
                            <ul className="roles">
                              <li>{item.Achievements.a1}</li>
                              <li>{item.Achievements.a2}</li>
                              <li>{item.Achievements.a3}</li>
                              <li>{item.Achievements.a4}</li>
                              <li>{item.Achievements.a5}</li>
                              <li>{item.Achievements.a6}</li>
                              <li>{item.Achievements.a7}</li>
                              <li>{item.Achievements.a8}</li>
                            </ul>                          
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
            </div>
          </div>

          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Certifications</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              {resumeData.certifications &&
                resumeData.certifications.map((item) => {
                  return (
                    <React.Fragment key={item.id}>
                      <div className="row item">
                        <div className="twelve columns">
                          <h3>{item.name}</h3>
                          <p className="info">
                            {item.issuingOrganization}
                            <span>&bull;</span>{" "}
                            <em className="date">{item.issueDate}</em>
                          </p>
                          <p className="info">
                            <a
                              href={item.credential}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Credential
                            </a>
                          </p>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
            </div>
          </div>

          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              {/* <p>{resumeData.skillsDescription}</p> */}
              <div className="bars">
                <ul className="skills">
                  {resumeData.skills &&
                    resumeData.skills.map((item) => {
                      return (
                        <React.Fragment key={item.id}>
                          <li>
                            <span
                              className={`bar-expand ${item.skillname.toLowerCase()}`}
                            ></span>
                            <em>
                              {item.skillname}{" "}
                              <i className={item.className}></i>
                            </em>
                          </li>
                        </React.Fragment>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
