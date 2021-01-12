import React, { Component } from "react";

export default class contactus extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contactus">
        <h2>Contact Details</h2>
        <div className="row section-head">
          <div className="twelve columns">
            <p className="lead">
              Feel free to contact me for any work or suggestions below
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="six columns footer-widgets">
            <div className="social-links">
              {resumeData.socialLinks &&
                resumeData.socialLinks.map((item) => {
                  return (
                    <React.Fragment key={item.className}>
                      <li>
                        <h4>
                          {item.name} <i className={item.className} /> :{" "}
                          <a href={item.url} target="_blank" rel="noreferrer">
                            {item.id}
                          </a>
                        </h4>
                      </li>
                    </React.Fragment>
                  );
                })}
            </div>
            <p className="address">
              <span>{resumeData.name}</span>
              <br></br>
              <span>{resumeData.address1}</span>
              <br></br>
              <span>{resumeData.address2}</span>
              <br></br>
              <span>{resumeData.phoneNumber}</span>
              <br></br>
              <span>
                <a href={resumeData.website}>{resumeData.website}</a>
              </span>
            </p>
          </aside>
          <div className="six columns footer-widget"></div>
          <div className="columns contact-details"></div>
          <div className="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="abhijeet-karmaker"><a className="LI-simple-link" href='https://ca.linkedin.com/in/abhijeet-karmaker?trk=profile-badge'>Abhijeet Karmaker</a></div>
        </div>
      </section>
    );
  }
}
