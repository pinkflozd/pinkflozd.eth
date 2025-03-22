import logo from './pinkflozd.jpg';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTelegram, faXTwitter } from '@fortawesome/free-brands-svg-icons'

import Obfuscate from 'react-obfuscate';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <div className="App-log">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>
          I'm Luka (<code>pinkflozd</code>)

        </p>
        <p class="small">
          Full stack and web development pro ready to bring your ideas to life!
        </p>
        <p class="small2">
          <i>contact me below to hire me!</i>
        </p>
        <div class="social">
          <a href="https://x.com/realpinkflozd">
            <FontAwesomeIcon class="icons" icon={faXTwitter} size="lg" />
          </a>
          <a href="https://github.com/pinkflozd">
            <FontAwesomeIcon class="icons" icon={faGithub} size="lg" />
          </a>
          <Obfuscate href="https://t.me/pinkflozd">
            <FontAwesomeIcon class="icons" icon={faTelegram} size="lg" />
          </Obfuscate>
          <Obfuscate email="pinkflozd@gmail.com" aria-label="Email Me">
            <FontAwesomeIcon class="icons" icon={faEnvelope} size="lg" />
          </Obfuscate>
        </div>
      </header>
      <footer>
        <Obfuscate element="p">
          Luka Karinja s.p.
        </Obfuscate>
        <Obfuscate element="p">
          Trubarjeva ulica 68, 6330 Piran, Slovenia
        </Obfuscate>
      </footer>
    </div>
  );
}

export default App;
