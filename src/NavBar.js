export default function NavBar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        usernamedlo
      </a>
        <ul className="nav-links">
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
        </ul>
    </nav>
  );
}