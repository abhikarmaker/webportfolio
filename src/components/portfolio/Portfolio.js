import React, { Component } from "react";

export default class portfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works</h1>
            <div id="portfolio-wrapper">
              {/* className="bgrid-quarters s-bgrid-thirds cf" */}
              {resumeData.portfolio &&
                resumeData.portfolio.map((item) => {
                  return (
                    <React.Fragment key={item.id}>
                      <div className="columns portfolio-item">
                        {/* <div className="item-wrap">  */}
                        <a href={item.link} target="_blank" rel="noreferrer">
                          <img
                            src={`${item.imgurl}`}
                            className="item-img"
                            alt=""
                          />{" "}
                        </a>
                        <h5>{item.name}</h5>
                        <p>
                          {item.description}{" "}
                          <a
                            href={item.githubLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className={item.fabIcon} />
                          </a>
                        </p>
                      </div>
                    </React.Fragment>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
