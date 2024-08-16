import { useState, useRef } from "react";
import { Data } from "../utils/types";
import Button from "./Button";
import Paragraph from "./Paragraph";
import {
  insertPeriodicalInfos,
  insertPeriodicalFiles,
} from "../utils/supabase";
import adminStyles from "../styles/admin.module.css";

const Form = ({
  periodical,
  setPeriodical,
}: {
  periodical: Data;
  setPeriodical: (periodical: Data) => void;
}) => {
  const [base64Thumbnail, setBase64Thumbnail] = useState<string>();
  const thumbnailRef = useRef<HTMLInputElement>(null);
  const pdfRef = useRef<HTMLInputElement>(null);

  const base64FileURL = (element: File): void => {
    const file = element;

    const reader = new window.FileReader();

    reader.onloadend = function (e) {
      if (!e.target) {
        return;
      }

      if (typeof e.target.result === "string") {
        setBase64Thumbnail(e.target.result);
      }
    };

    reader.readAsDataURL(file);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    prop: string
  ) => {
    if (!e.target.files) {
      return;
    }

    if (prop === "thumbnail") {
      base64FileURL(e.target.files[0]);
    }

    setPeriodical({ ...periodical, [prop]: e.target.files[0] });
  };

  const findMonth = (monthNumber: number): string => {
    let month: string;

    switch (monthNumber) {
      case 1:
        month = "Gennaio";
        break;
      case 2:
        month = "Febbraio";
        break;
      case 3:
        month = "Marzo";
        break;
      case 4:
        month = "Aprile";
        break;
      case 5:
        month = "Maggio";
        break;
      case 6:
        month = "Giugno";
        break;
      case 7:
        month = "Luglio";
        break;
      case 8:
        month = "Agosto";
        break;
      case 9:
        month = "Settembre";
        break;
      case 10:
        month = "Ottobre";
        break;
      case 11:
        month = "Novembre";
        break;
      case 12:
        month = "Dicembre";
        break;
      default:
        month = "Novembre";
    }

    return month;
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

      <Dropper base64Thumbnail={base64Thumbnail} />

      <Button
        theme={`${adminStyles.accent_theme} ${adminStyles.save_btn}`}
        onClick={() => {
          insertPeriodicalInfos(periodical);

          if (periodical.thumbnail) {
            insertPeriodicalFiles(
              "thumbnail",
              periodical.thumbnail,
              periodical.year
            );
          }

          if (periodical.pdf) {
            insertPeriodicalFiles("pdf", periodical.pdf, periodical.year);
          }
        }}
      >
        Salva
      </Button>
    </form>
  );
};

const Input = ({
  text,
  placeholder,
  className,
  onChange,
}: {
  text: string;
  placeholder: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className={`${adminStyles.input} ${className}`}>
      <span>{text}:</span>
      <input type="text" placeholder={placeholder} onChange={onChange} />
    </div>
  );
};

const Dropper = ({
  base64Thumbnail,
}: {
  base64Thumbnail: string | undefined;
}) => {
  return (
    <div
      className={adminStyles.dropper}
      data-active={base64Thumbnail ? "true" : "false"}
    >
      {base64Thumbnail && <img src={base64Thumbnail} alt="Copertina" />}
      {!base64Thumbnail && <Paragraph>Copertina</Paragraph>}
    </div>
  );
};

export default Form;
