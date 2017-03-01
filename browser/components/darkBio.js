import React, { Component } from 'react';
import { Link } from 'react-router';

export default class extends Component {
  render () {
    return (
      <div className="row">
        <div className="second">
          <div>
            <img className="personal-photo" src="media/frame03.png"/>
          </div>
          <div className="row">
            <div className="col-sm-2"></div>

            <div className="col-sm-8">
              <h2>Sophia began her brave new journey as a full stack developer / computer programmer / web developer extraordinaire in the fateful year of 2016.</h2>
              <h2>It was a year of change for America... and for our intrepid heroine.</h2>
              <h2>Through trials and tribulations, she learned to work the magic of both the front end and the back end, battling bugs of massive proportions and unfamiliar territory.</h2>
              <h2>Now she has raised her skill levels, in particular with the NERDS stack (Node, Express, React, Databases using SQL).</h2>
              <h2>If you'd like to hear more about Sophia's epic journey, you may contact her below (way, way below).</h2>
              <h2>Also, take a look at her <Link to="/lightMain"><em>projects</em></Link> (if you dare...)</h2>
              <h2>May the odds be ever in your favor...</h2>
            </div>

            <div className="col-sm-2"></div>
          </div>
        </div>
      </div>
    )
  }
}
