import CurrentTime from "./CurrentTime";
import CurrentBattery from "./CurrentBattery";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
        <img src="/img/apple_logo.png" alt="Apple Logo" className="logo" />
        <strong><h1 className="site-title">usernamedlo</h1></strong>
        </a>
      </div>
        <ul>
            <li>
                <CurrentBattery />
            </li>
            <li>
              <i class="fas fa-wifi wifi-icon wifi-connected"></i>
            </li>
            <li>
                <CurrentTime />
            </li>
        </ul>
    </nav>
  );
}