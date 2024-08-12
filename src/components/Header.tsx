import logo from "../assets/logo.png";

type Toggle = {
  toggleNavBar: boolean;
  setToggleNavBar: (value: boolean | ((prevValue: boolean) => boolean)) => void;
};

const Header = ({ toggleNavBar, setToggleNavBar }: Toggle) => {
  return (
    <header>
      <div className="header__wrapper">
        <a href="https://www.donboscopadova.it/" target="_blank" tabIndex={-1}>
          <img src={logo} alt="Logo" className="logo" />
        </a>

        <nav className={`${toggleNavBar && "active"}`}>
          <ul className="nav__links">
            <ListItem text="Home" />
            <ListItem text="Giornalini" />
            <ListItem text="Aiutaci" />
            <li className="button">
              <a href="/" target="_blank" className="btn">
                Admin
              </a>
            </li>
          </ul>
        </nav>

        <div
          className="hamburger"
          onClick={() => setToggleNavBar(!toggleNavBar)}
        ></div>
      </div>
    </header>
  );
};

const ListItem = ({ text }: { text: string }) => {
  return (
    <li className="link">
      <a href={`#${text.toLowerCase()}`}>{text}</a>
    </li>
  );
};

export default Header;
