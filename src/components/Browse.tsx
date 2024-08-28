import { useState, useEffect } from "react";
import { Data, DialogInfo } from "../utils/types";
import Paragraph from "./Paragraph";
import Carousel from "./Carousel";
import Property from "../components/Property";
import supabase from "../utils/supabase";
import homeStyles from "../styles/home.module.css";

const Browse = ({
  dialogInfo,
  setDialogInfo,
}: {
  dialogInfo: DialogInfo;
  setDialogInfo: (dialogInfo: DialogInfo) => void;
}) => {
  const [periodicals, setPeriodicals] = useState<Data[]>([]);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.from("periodical").select("*");

      if (error) {
        throw error;
      }

      setPeriodicals(data);
    })();
  }, []);

  return (
    <section id="giornalini" className={homeStyles.giornalini_section}>
      <h1 className="title">Giornalini</h1>

      <Paragraph>
        Ecco tutte le edizioni de 'Il Buongiorno': trova quella che desideri
        leggere, clicca la copertina ed inizia a scorrere il pdf!
      </Paragraph>

      <Carousel periodicals={periodicals} setDialogInfo={setDialogInfo} />

      <Dialog dialogInfo={dialogInfo} setDialogInfo={setDialogInfo} />
    </section>
  );
};

const Dialog = ({
  dialogInfo,
  setDialogInfo,
}: {
  dialogInfo: DialogInfo;
  setDialogInfo: (dialogInfo: DialogInfo) => void;
}) => {
  const { title, edition, pages, year } = dialogInfo.periodical;

  return (
    <dialog open={dialogInfo.isOpen} className={homeStyles.dialog}>
      <div>
        <h1 className={homeStyles.dialog__title}>{title}</h1>
        <div
          className={homeStyles.close_icon}
          onClick={() => {
            setDialogInfo({ ...dialogInfo, isOpen: false });
          }}
        ></div>
      </div>

      <Property text="Edizione" value={edition} />
      <Property text="Numero di pagine" value={pages} />
      <Property text="Anno" value={year} />
    </dialog>
  );
};

export default Browse;
