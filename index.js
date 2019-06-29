"use strict";

import Header from "./header.js";
//global ReactDOM
function App(props) {
  return (
    <div className="container">
      <Header name={props.name} />
      <main className="container">
        <section class="intro center">
          <img src="1.jpg" class="center" alt="A Picture of Sally Student" />
          <p>Greetings my name is {props.name}</p>
        </section>
        <section class="summary">
          <h3>Summary</h3>
          <p>
            Resourceful, analytical and detail-driven individual with
            capabilities in completing multiple projects with competing
            deadlines. Aggressive in identifying and resolving inefficient
            operational processes.Strong team member, able to motivate crews to
            achieve optimal production rates while maintaining high safety
            methods and practices. Reliable follow-through skills, fulfilling
            all administrative requirements from field activities.
          </p>
        </section>
        <section class="experience">
          <h3>Experience</h3>
          <p>Open Paq LLC, Dump Water, ND 2015-2016</p>
          <p>
            <b>IT Help Desk Technician</b>
          </p>
          <ul>
            <li>
              Provided desktop support for specialized hardware and software
              systems used in Yanfeng Automotive Interiors
            </li>
            <li>Configured local and network printers</li>
            <li>
              Troubleshot and resolved desktop, network, and systems issues
            </li>
          </ul>
          <br />
          <p>The Smelly Skunk, Hell, MI 2011-2016</p>
          <p>
            <b>Application Engineer</b>
          </p>
          <ul>
            <li>Performed hardware and software support and installation.</li>
            <li>
              Diagnosed application errors and network connectivity problems.
            </li>
            <li>Analyzed and evaluated systems for faults</li>
            <li>
              Designed software applications, developing and executing test
              plans and documenting development process
            </li>
          </ul>
        </section>
        <section class="education">
          <h3 class="center">Education</h3>
          <p>Delaware State University, Dover, DE</p>
          <p>Completed: 2000</p>
          <p>
            <b>
              <i>
                Bachelor of Science, Electrical/Electronic Engineering, Minor:
                Mechanical Engineering
              </i>
            </b>
          </p>
        </section>
      </main>
    </div>
  );
}

App.defaultProps = {
  name: "Sally Student"
};

ReactDOM.render(
  <App name="David Piper" />,
  document.querySelector("#application-root")
);
