import React, { Component } from 'react'

export default class footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div>
        <footer>
          <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
                {
                  resumeData.socialLinks && resumeData.socialLinks.map((item) => {
                    return (
                      <React.Fragment key={item.url}>
                      <li>
                        <a href={item.url} target="_blank" rel="noreferrer">
                          <i className={item.className} />
                        </a>
                      </li>
                      </React.Fragment>
                    )
                  })
                }
              </ul>
              <ul className="copyright">
                <li>© 2021 Abhijeet Karmaker</li>
                <li>Design by <a title="AbhijeetKarmaker" href="https://github.com/abhikarmaker">Abhijeet Karmaker</a></li>
              </ul>
            </div>
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
          </div>
        </footer>
      </div>
    )
  }
}
