import React , {Component} from 'react';

class About extends Component{
  render(){
    return(
      <div className="about-all">
        <img id="top" className="group-ava" src="https://i.postimg.cc/qq0TKTdW/A560246-C-9-B1-C-4516-BEC2-A4682268690-D.jpg" alt="avatar"/>
      <h1>TMD</h1>
      <div className="about-link">
        <a className="nav-link" href="#AboutGroup" rel="internal"><label>Group Work</label></a>
        <a className="nav-link" href="#AboutProject" rel="internal"><label>About Project</label></a>
        <a className="nav-link" href="#Motivation" rel="internal"><label>Motivation</label></a>
        <a className="nav-link" href="#Challenges" rel="internal"><label>Challenges</label></a>
        <a className="nav-link" href="#Future" rel="internal"><label>Future Works till 12/9 (Done)</label></a>
      </div>
    <hr/>

  <main id="main-doc">
    <section className="main-section" id="AboutGroup">
      <h2>About Group</h2>
      <article>
        <p>Our Group TMD is named by the letter of first name of each members, the purpose is to research and building the CPU Scheduling Algorithms for the final project in class</p>
        <p>Start Working in September</p>
        <p>Communicate over Slack</p>
        <p>Everyone has the same duty: Coding, Reasearching and Preparing for Presentation</p>
      </article>
    </section>

    <hr/>

    <section className="main-section" id="AboutProject">
      <h2>About Project</h2>
      <article>
        <p>The purpose is to have deeper understanding about how the algorithm built and works in CPU Scheduling</p>
        <p>Build the programs for the types of CPU Scheduling (FCFS, SRTF, SJF, RR)</p>
        <p>Write all the Programs in C</p>
        <p>Read the input from the user’s file (The burst time and arrival time of processes)</p>
        <p>Output return with Gantt Chart and data about the Ave. Waiting time / Ave.TATime of the type user choose</p>
        <p>Push everything to GitLab<a href="https://gitlab.com/tandduong/tan-matthew-finalproject-cosc439/" target="_blank">Final Project</a></p>
      </article>
    </section>

    <hr/>

    <section className="main-section" id="Motivation">
      <h2>Motivation</h2>
      <article>
        <p>To improve the C programming skill</p>
        <p>To understand how each of the CPU Sceduling works</p>
        <p>To save time of caclculating when facing the huge numbers of processes</p>
        <p>To enhance knowledge studied in class</p>
      </article>
    </section>

    <hr/>

    <section className="main-section" id="Challenges">
      <h2>Challenges</h2>
      <article>
        <p>Working in C was a challenge</p> 
        <p>Project Management/Goals</p>
        <p>Didn’t decide the nature of  our project until second half</p>
        <p>Weak team communication (Not everyone available at the same time)</p>
        <p>Commit more often so we can collaborate more easily</p>
      </article>
    </section>

    <hr/>      

    <section className="main-section" id="Future">
        <h2>Future Plan (Done)</h2>
        <article>
          <p>Improve the programs</p>
          <p>Update the final report</p>
        </article>      
    </section>
  </main>
  
  <div className="back-top">    
    <a href="#top">Top</a></div>  
  </div>
    )
  }
}

export default About;