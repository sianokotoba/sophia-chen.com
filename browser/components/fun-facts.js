import React, { Component } from 'react';
import { Link } from 'react-router';

export default class extends Component {
  render () {
    return (
      <div className="row">
        <div className="col-sm-2"></div>

        <div className="facts col-sm-8">
          <ul>
            <li>I speak three other languages conversationally (Cantonese, Mandarin, Japanese)</li>
            <li>I learned most sports rules via shounen manga and anime (ie, football, soccer, tennis, etc)</li>
            <li>I am Karaoke Queen</li>
            <li>I know enough Japanese songs that I could sing for four hours straight and still not be done</li>
            <li>A part of my bucket list is to be an extra on a zombie movie</li>
            <li>I love B movies like Tremors</li>
            <li>I am a Whovian (shout out to all my Doctor Who and David Tennant fans!)</li>
            <li>I love spicy food</li>
            <li>My favorite museum is the Museum of Art and Design</li>
            <li>I won a poetry contest in Middle School</li>
            <li>I love dogs, especially the big ones (ie, Dobermans, Pitbulls, German Shepherds, etc)</li>
          </ul>
        </div>

        <div className="col-sm-2"></div>
      </div>
    )
  }
}
