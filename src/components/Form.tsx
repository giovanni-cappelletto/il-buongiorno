import { useRef } from "react";
import { Data } from "../utils/types";
import Button from "./Button";
import Input from "./Input";
import {
  insertPeriodicalInfos,
  insertPeriodicalFiles,
} from "../utils/supabase";
import findMonth from "../utils/findMonth";
import adminStyles from "../styles/admin.module.css";

const Form = ({
  periodical,
  setPeriodical,
  notify,
}: {
  periodical: Data;
  setPeriodical: (periodical: Data) => void;
  notify: (prop: string, err?: string) => void;
}) => {
  const thumbnailRef = useRef<HTMLInputElement>(null);
  const pdfRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    prop: string
  ) => {
    if (!e.target.files) {
      notify("", "Sembra che il file non sia stato caricato correttamente");
      return;
    }

    setPeriodical({ ...periodical, [prop]: e.target.files[0] });
    notify(prop);
  };

  const handleChangeNumber = (
    e: React.ChangeEvent<HTMLInputElement>,
    prop: string,
    minLength?: number,
    maxLength?: number,
    isMonth?: boolean
  ): void => {
    let newValue: number | string;

    if (!Number(e.target.value) && e.target.value !== "0") {
      e.target.value = "";
      return;
    }

    // Length check
    if (minLength && e.target.value.length < minLength) {
      return;
    }

    if (maxLength && e.target.value.length > maxLength) {
      return;
    }

    if (isMonth) {
      newValue = findMonth(Number(e.target.value));
    } else {
      newValue = Math.abs(Number(e.target.value));
    }

    setPeriodical({
      ...periodical,
      [prop]: newValue,
    });
  };

  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
    >
      <div className={adminStyles.form__container}>
        <Input
          text="Titolo"
          placeholder="Il latte dei sogni"
          className={adminStyles.title_input}
          onChange={(e) => {
            const hypotheticalValue: string = e.target.value;

            // Removing first space
            if (
              e.target.value === " " &&
              hypotheticalValue.trim().length === 0
            ) {
              e.target.value = "";
              return;
            }

            // Default value
            if (hypotheticalValue === "") {
              setPeriodical({ ...periodical, title: "Il latte dei sogni" });
              return;
            }

            setPeriodical({ ...periodical, title: hypotheticalValue });
          }}
        />

        <div className={adminStyles.input__container}>
          <Input
            text="Edizione"
            placeholder="2"
            onChange={(e) => handleChangeNumber(e, "edition")}
          />
          <Input
            text="Pagine"
            placeholder="40"
            onChange={(e) => handleChangeNumber(e, "pages")}
          />
        </div>

        <div className={adminStyles.input__container}>
          <Input
            text="Mese"
            placeholder="11"
            onChange={(e) => {
              handleChangeNumber(e, "month", 1, 2, true);
            }}
          />
          <Input
            text="Anno"
            placeholder="2022"
            onChange={(e) => handleChangeNumber(e, "year", 4, 4)}
          />
        </div>

        <div className={adminStyles.btn__container}>
          <Button
            theme={adminStyles.dark_theme}
            onClick={() => thumbnailRef.current?.click()}
          >
            Copertina
            <input
              type="file"
              accept="image/png"
              ref={thumbnailRef}
              onChange={(e) => handleChange(e, "thumbnail")}
              hidden
            />
          </Button>

          <Button
            theme={adminStyles.dark_theme}
            onClick={() => pdfRef.current?.click()}
          >
            PDF
            <input
              type="file"
              accept="application/pdf"
              ref={pdfRef}
              onChange={(e) => handleChange(e, "pdf")}
              hidden
            />
          </Button>
        </div>
      </div>

      <Button
        theme={`${adminStyles.accent_theme} ${adminStyles.save_btn}`}
        onClick={() => {
          if (!periodical.thumbnail) {
            notify("", "La copertina non è stata inserita correttamente");
            return;
          }

          if (!periodical.pdf) {
            notify("", "Il PDF non è stato inserito correttamente");
            return;
          }

          console.log(periodical);

          insertPeriodicalInfos(periodical, notify);

          if (periodical.thumbnail) {
            insertPeriodicalFiles(
              "thumbnail",
              periodical.thumbnail,
              periodical.year,
              notify
            );
          }

          if (periodical.pdf) {
            insertPeriodicalFiles(
              "pdf",
              periodical.pdf,
              periodical.year,
              notify
            );
          }
        }}
      >
        Salva
      </Button>
    </form>
  );
};

export default Form;
