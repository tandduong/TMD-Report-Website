import React, {Component} from 'react';

class Test extends Component{
  render() {
    return (
      <div className="docs">
        <p>Here we have simple formular for calculating various times for given processes:</p>

        <ul>
          <li>Completion Time: Time taken for the execution to complete, starting from arrival time.</li>

          <li>Turn Around Time: Time taken to complete after arrival. In simple words, it is the difference between the Completion time and the Arrival time.</li>

          <li>Waiting Time: Total time the process has to wait before it's execution begins. It is the difference between the Turn Around time and the Burst time of the process.</li>
        </ul> 

        <p>(StudyTonight.com)</p>

        <p>Our Test Program use the file from user and test for the output.</p>
        <p>Check how it works by compling it with Cygwin or any other complier for C.</p> 
        <p>Our <a href="https://github.com/tandduong/cpu-scheduling-tmd/blob/master/TMD_Scheduler.c" target="_blank">Test</a></p>
      </div>
    )
  }
}

export default Test;