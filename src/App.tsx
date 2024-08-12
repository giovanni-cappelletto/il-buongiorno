import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Section from "./components/Section";
import Browse from "./components/Browse";
import Help from "./components/Help";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [toggleNavBar, setToggleNavBar] = useState<boolean>(false);

  return (
    <div
      className={`root__container ${toggleNavBar && "active"}`}
      onClick={() => {
        if (!toggleNavBar) {
          return;
        }

        setToggleNavBar(false);
      }}
    >
      <Header toggleNavBar={toggleNavBar} setToggleNavBar={setToggleNavBar} />

      <Main />
      <Section />
      <Browse />
      <Help />
      <Footer />
    </div>
  );
};

export default App;
