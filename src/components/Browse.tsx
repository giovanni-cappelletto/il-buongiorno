import { useState, useEffect } from "react";
import { Data, DialogInfo } from "../App";
import Paragraph from "./Paragraph";
import Carousel from "./Carousel";
import supabase from "../utils/supabase";

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
    <section id="giornalini" className="giornalini_section">
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
    <dialog open={dialogInfo.isOpen}>
      <div>
        <h1 className="dialog__title">{title}</h1>
        <div
          className="close_icon"
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

const Property = ({
  text,
  value,
}: {
  text: string;
  value: string | number;
}) => {
  return (
    <p className="dialog__property">
      {text}: <span className="value">{value}</span>
    </p>
  );
};

export default Browse;
