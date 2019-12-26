import React, { Component } from "react"
 
class FCFS extends Component {
  render(){
    return(
      <div className= "docs">
        <p>In the First Come First Serve, the process that comes first must be executed first, as its name assigned, or the process requests the CPU first will get the CPU allocated first.</p>

        <p>The FCFS does not have the non-preemptive case and could suffer the <a href="https://www.geeksforgeeks.org/convoy-effect-operating-systems/" target="_blank">Convoy Effect</a>.</p>

        <ul>
          <li><i>First Come First Serve, is just like FIFO(First in First out) Queue data structure, where the data element which is added to the queue first, is the one who leaves the queue first.</i></li>
          <li><i>This is used in Batch Systems.</i></li>
          <li><i>It's easy to understand and implement programmatically, using a Queue data structure, where a new process enters through the tail of the queue, and the scheduler selects process from the head of the queue.</i></li>
          <li><i>A perfect real life example of FCFS scheduling is buying tickets at ticket counter.</i></li>
        </ul>   
          <p>(StudyTonight.com)</p>

          <p>The FCFS is very easy to follow and use, but it may not be efficient in average waiting time, which is as small as good for any of type of the CPU Scheduling.</p>
          <p>Check Our Program for <a href="https://github.com/tandduong/cpu-scheduling-tmd/blob/master/fcfs.c" target="_blank">FCFS</a></p>
      </div> 
    )
  }
}

export default FCFS;