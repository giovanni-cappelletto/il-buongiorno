import logo from "../assets/logo.png";
import homeStyles from "../styles/home.module.css";

type Toggle = {
  toggleNavBar: boolean;
  setToggleNavBar: (value: boolean | ((prevValue: boolean) => boolean)) => void;
};

const Header = ({ toggleNavBar, setToggleNavBar }: Toggle) => {
  return (
    <header>
      <div className={homeStyles.header__wrapper}>
        <a href="https://www.donboscopadova.it/" target="_blank" tabIndex={-1}>
          <img src={logo} alt="Logo" className={homeStyles.logo} />
        </a>

        <nav className={`${toggleNavBar && homeStyles.active}`}>
          <ul className={homeStyles.nav__links}>
            <ListItem text="Home" />
            <ListItem text="Giornalini" />
            <ListItem text="Aiutaci" />
            <li className={homeStyles.button}>
              <a href="/admin" target="_blank" className={homeStyles.btn}>
                Admin
              </a>
            </li>
          </ul>
        </nav>

        <div
          className={homeStyles.hamburger}
          onClick={() => setToggleNavBar(!toggleNavBar)}
        ></div>
      </div>
    </header>
  );
};

const ListItem = ({ text }: { text: string }) => {
  return (
    <li className={homeStyles.link}>
      <a href={`#${text.toLowerCase()}`}>{text}</a>
    </li>
  );
};

export default Header;
