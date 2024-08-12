import { useState, useEffect, ReactNode } from "react";
import Paragraph from "./Paragraph";
import supabase from "../utils/supabase";
import getAssets from "../utils/getAssets";
import leftArrowIcon from "../assets/leftArrowIcon.svg";
import rightArrowIcon from "../assets/rightArrowIcon.svg";

interface Data {
  readonly id: number;
  title: string;
  month: string;
  edition: number;
  year: number;
  pages: number;
}

type DialogInfo = {
  isOpen: boolean;
  periodical: Data;
};

const Browse = () => {
  const [periodicals, setPeriodicals] = useState<Data[]>([]);
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

      <div className="slider">
        <img src={leftArrowIcon} alt="Freccia" className="slider__icon" />

        <div className="cover__container">
          {periodicals.map((periodical: Data, index: number): ReactNode => {
            return (
              <div key={index}>
                <a
                  href={getAssets("pdf", periodical.year, periodical.month)}
                  download={`Giornalino di ${periodical.month}`}
                  target="_blank"
                >
                  <img
                    src={getAssets(
                      "thumbnails",
                      periodical.year,
                      periodical.month
                    )}
                    alt="Copertina"
                    className="cover"
                  />
                </a>
                <span
                  className="material-symbols-outlined info_icon side_image__info_icon"
                  onClick={() => {
                    setDialogInfo({ isOpen: true, periodical });
                  }}
                >
                  info
                </span>
              </div>
            );
          })}
        </div>

        <img src={rightArrowIcon} alt="Freccia" className="slider__icon" />
      </div>

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
