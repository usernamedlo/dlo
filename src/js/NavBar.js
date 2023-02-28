import CurrentTime from "./CurrentTime";
import CurrentBattery from "./CurrentBattery";

export default function NavBar() {
  return (
    <nav className="nav">
        <a href="/">
        <img src="/img/apple_logo.png" alt="Apple Logo" className="logo" />
        <h3 className="site-title">usernamedlo</h3>
        </a>
        <ul>
            <li>
                <CurrentBattery />
            </li>
            <li>
              <span><i class="fas fa-wifi wifi-icon wifi-connected"></i></span>
            </li>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <CurrentTime />
            </li>
        </ul>
    </nav>
  );
}