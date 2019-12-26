import React, {Component} from 'react';

class SJF extends Component{
  render(){
    return(
      <div className="docs">
        <p>Shortest Job First scheduling</p>
        <ul>
          <li>Works on the process with the shortest burst time or duration first.</li>
          <li>This is the best approach to minimize waiting time.</li>
          <li>This is used in Batch Systems.</li>
        </ul>
        <p>There are two types:</p>
        <ul>
          <li><i>Non Pre-emptive</i></li>
          <li><i>Pre-emptive</i></li>
        </ul>
        <p>To successfully implement it, the burst time/duration time of the processes should be known to the processor in advance, which is practically not feasible all the time.</p>
        <p>This scheduling algorithm is optimal if all the jobs/processes are available at the same time. (either Arrival time is 0 for all, or Arrival time is same for all)</p>

        <p>(StudyTonight.com)</p>

        <p>Check Our Program for <a href="https://github.com/tandduong/cpu-scheduling-tmd/blob/master/sjf.c" target="_blank">SJF</a></p>
      </div>
    )
  }
}

export default SJF;