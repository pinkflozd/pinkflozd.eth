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
        <p className="small">
          Full stack and web development pro ready to bring your ideas to life!
        </p>
        <p className="small2">
          <i>Contact me below to hire me!</i>
        </p>
        <div className="social">
          <a href="https://x.com/realpinkflozd" aria-label="Find me on X">
            <FontAwesomeIcon className="icons" icon={faXTwitter} size="lg" />
          </a>
          <a href="https://github.com/pinkflozd" aria-label="Find me on GitHub">
            <FontAwesomeIcon className="icons" icon={faGithub} size="lg" />
          </a>
          <Obfuscate href="https://t.me/pinkflozd" aria-label="Contact me on Telegram">
            <FontAwesomeIcon className="icons" icon={faTelegram} size="lg" />
          </Obfuscate>
          <Obfuscate email="pinkflozd@gmail.com" aria-label="Email Me">
            <FontAwesomeIcon className="icons" icon={faEnvelope} size="lg" />
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
