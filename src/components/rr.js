import React, {Component} from 'react';

class RR extends Component{
  render(){
    return(
      <div className="docs">
        <p>Round Robin Scheduling is</p>
        <ul>
        <li><i>A fixed time is allotted to each process, called quantum, for execution.</i></li>
        <li><i>Once a process is executed for given time period that process is preemptied and other process executes for given time period.</i></li>
        <li><i>Context switching is used to save states of preemptied processes.</i></li>
        </ul>
        <p>(StudyTonight.com)</p>

        <p>See our <a href="https://github.com/tandduong/cpu-scheduling-tmd/blob/master/rr.c" target="_blank">RR</a></p>
      </div>
    )
  }
}

export default RR;