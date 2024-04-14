function Header() {
  return (
    <header>
      <div className="container">
        <span className="logo">
          <span className="onea">1a</span>cre<span className="in">.in</span>
        </span>
        <nav>
          <ul>
            <li>
              <a href="#">City Lands</a>
            </li>
            <li>
              <a href="#">All Lands</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Premium</a>
            </li>
            <li className="button-active">
              <a href="#">Sell my Land</a>
            </li>
            <li className="button-active">
              <a href="#">Account</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
