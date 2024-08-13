import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Section from "./components/Section";
import Browse from "./components/Browse";
import Help from "./components/Help";
import Footer from "./components/Footer";
import "./App.css";

export interface Data {
  readonly id: number;
  title: string;
  month: string;
  edition: number;
  year: number;
  pages: number;
}

export type DialogInfo = {
  isOpen: boolean;
  periodical: Data;
};

const App = () => {
  const [toggleNavBar, setToggleNavBar] = useState<boolean>(false);
  const [dialogInfo, setDialogInfo] = useState<DialogInfo>({
    isOpen: false,
    periodical: {
      id: 0,
      title: "",
      month: "",
      edition: 0,
      year: 0,
      pages: 0,
    },
  });

  return (
    <div
      className={`root__container ${toggleNavBar && "after"} ${
        dialogInfo.isOpen && "before"
      }`}
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

export default App;
