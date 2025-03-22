import logo from './pinkflozd.jpg';
import './App.css';
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-log">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>
          I'm <code>pinkflozd</code>.

        </p>
        <p class="small">
          Full stack and web development pro ready to bring your ideas to life
        </p>
        <p class="small2">
          <i>contact me below to hire me!</i>
        </p>
        <div class="social">
          <a href="https://twitter.com/realpinkflozd" target="_blank">
            <FontAwesomeIcon class="icons" icon={faTwitter} size="lg" />
          </a>
          <a href="https://github.com/pinkflozd" target="_blank">
            <FontAwesomeIcon class="icons" icon={faGithub} size="lg" />
          </a>
          <a href="mailto:pinkflozd@gmail.com" target="_blank">
            <FontAwesomeIcon class="icons" icon={faEnvelope} size="lg" />
          </a>
        </div>
      </header>
      <footer>
        <p>Luka Karinja s.p., Trubarjeva ulica 68, 6330 Piran, Slovenia</p>
      </footer>
    </div>
  );
}

export default App;
