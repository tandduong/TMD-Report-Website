import React , {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class MainPage extends Component {
  render(){
    return(
      <div>
        <Grid className="main-grid">
          <Cell col ={12}></Cell>

          <div className="group-intro-text">
            <h2>TMD Group</h2>
            <h3>Tan D Duong - Matthew Lebo - Xiao "Danny" Luo</h3>
            <h4>COSC 439 - Fall 2019</h4>
            <hr/>
            <p>Final Project | CPU Scheduling Stimulator</p>
          </div>
        </Grid>
      </div>
    )
  }
}

export default MainPage;