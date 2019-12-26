import React, {Component} from 'react';
import {Tab, Tabs,Grid,Cell} from 'react-mdl';
import FCFS from './fcfs';
import SRTF from './srtf';
import Test from './test';
import RR from './rr';
import SJF from './sjf';

class Docs extends Component {
  constructor(props) {
    super(props)
    this.state = {activeTab: 0};
  }

  toggleCategories(){
    if(this.state.activeTab === 0){
      return(
        <FCFS/>
      )
    }
    else if(this.state.activeTab === 1){
      return(
        <SJF />
      )
    }

    else if(this.state.activeTab === 2){
      return(
        <SRTF />
      )
    }

    else if(this.state.activeTab === 3){
      return(
       <RR />
      )
    }

    else{
      return(
       <Test />
      )
    }
  }

  render() {
    return (
      <div className="demo-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
            <Tab className="title-code"><label>FCFS</label></Tab>
            <Tab className="title-code"><label>SJF</label></Tab>
            <Tab className="title-code"><label>SRTF</label></Tab>
            <Tab className="title-code"><label>RR</label></Tab>
            <Tab className="title-code"><label>Test</label></Tab>
        </Tabs>
                
          <Grid>
          <Cell col ={12}>

          </Cell>
          </Grid>
          <div className="content">{this.toggleCategories()}</div>
        </div>    
    )
  }
}

export default Docs;