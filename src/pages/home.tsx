import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Section from "../components/Section";
import Browse from "../components/Browse";
import Help from "../components/Help";
import Footer from "../components/Footer";
import { DialogInfo } from "../utils/types";
import homeStyles from "../styles/home.module.css";

const Home = () => {
  const [toggleNavBar, setToggleNavBar] = useState<boolean>(false);
  const [dialogInfo, setDialogInfo] = useState<DialogInfo>({
    isOpen: false,
    periodical: {
      title: "",
      month: "",
      edition: 0,
      year: 0,
      pages: 0,
    },
  });

  return (
    <div
      className={`${homeStyles.root__container} ${
        toggleNavBar && homeStyles.after
      } ${dialogInfo.isOpen && homeStyles.before}`}
      onClick={() => {
        if (!toggleNavBar) {
          if (dialogInfo.isOpen) {
            setDialogInfo({ ...dialogInfo, isOpen: false });
          }

          return;
        }

        setToggleNavBar(false);
      }}
    >
      <Header toggleNavBar={toggleNavBar} setToggleNavBar={setToggleNavBar} />

      <Main />
      <Section />
      <Browse dialogInfo={dialogInfo} setDialogInfo={setDialogInfo} />
      <Help />
      <Footer />
    </div>
  );
};

export default Home;
