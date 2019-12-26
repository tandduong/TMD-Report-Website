import React, {Component} from 'react';

class SRTF extends Component{
  render(){
    return(
      <div className="docs">
        <p>SRTF (Shortest Time Remaining First) is the other case of Shortest Job First. SRTF is the Pre-emptive one.</p>

        <p>The purpose and process of this type is the same as SJF.</p>

        <p><i>In Preemptive Shortest Job First Scheduling, jobs are put into ready queue as they arrive, but as a process with short burst time arrives, the existing process is preempted or removed from execution, and the shorter job is executed first.</i></p>

        <p>If the arrival time for processes are different, which means all the processes are not available in the ready queue at time 0, and some jobs arrive after some time, in such situation, sometimes process with short burst time have to wait for the current process's execution to finish, because in Non Pre-emptive SJF, on arrival of a process with short duration, the existing job/process's execution is not halted/stopped to execute the short job first.</p>

        <p>This leads to the problem of<strong> Starvation</strong>, where a shorter process has to wait for a long time until the current longer process gets executed. This happens if shorter jobs keep coming, but this can be solved using the concept of<strong> aging</strong>.</p>

        <p>(StudyTonight.com)</p>

        <p>Check Our program for the <a href="https://github.com/tandduong/cpu-scheduling-tmd/blob/master/strf.c" target="_blank">STRF</a></p>
      </div>
    )
  }
}

export default SRTF