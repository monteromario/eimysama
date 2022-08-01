function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        E I M Y S A M A
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/contact">
              Contact
            </a>
          </li>
          <li className="nav-item active dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/shop"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Shop
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/shop">
                All
              </a>
              <a className="dropdown-item" href="/shop?filter=top">
                Top sellers{" "}
                <div className="badge bg-success text-white position-absolute ml-2">
                  Top
                </div>
              </a>
              <a className="dropdown-item" href="/shop?filter=new">
                New arrivals{" "}
                <div className="badge bg-danger text-white position-absolute ml-2">
                  New
                </div>
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/shop?filter=sale">
                Sales{" "}
                <div className="badge bg-dark text-white position-absolute ml-2">
                  Sale
                </div>
              </a>
            </div>
          </li>
        </ul>
        <form className="form-inline" action="/shop">
          <input
            className="form-control mr-sm-2 w-auto mr-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            name="search"
          />
          <button
            className="btn btn-outline-dark my-2 mr-2 my-sm-0"
            type="submit"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <a className="btn btn-outline-dark" href="/cart">
            <i className="bi-cart-fill me-1"></i>
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="badge bg-dark text-white ms-1 rounded-pill">
              {JSON.parse(localStorage.getItem("ES_items"))
                ? JSON.parse(localStorage.getItem("ES_items")).length
                : "0"}
            </span>
          </a>
        </form>
      </div>
    </nav>
  );
}

export default Nav;
