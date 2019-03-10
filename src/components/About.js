import React, { Component } from "react";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="twelve columns centered main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>
          </div>
        </div>
        <div className="row">
          <div className="nine columns centered main-col">
            <h2>Below you'll find a list of some of my skills:</h2>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="nine columns centered main-col ">
            <h2>FRONT-END:</h2>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="ten columns centered main-col ">
            <div className="bgrid-sixths">
              {resumeData.frontend.map(item => {
                return (
                  <div className="two columns ">
                    <img src={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="nine columns centered main-col">
            <h2>BACK-END:</h2>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="ten columns centered main-col">
            <div className="bgrid-sixths">
              {resumeData.backend.map(item => {
                return (
                  <div className="two columns ">
                    <img src={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="nine columns centered main-col">
            <h2>OTHERS:</h2>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="ten columns centered main-col">
            <div className="bgrid-sixths">
              {resumeData.others.map(item => {
                return (
                  <div className="two columns ">
                    <img src={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
