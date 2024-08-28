import { useState, useEffect } from "react";
import Paragraph from "../components/Paragraph";
import Card from "../components/Card";
import Breadcrumb from "../components/Breadcrumb";
import Button from "../components/Button";
import Input from "../components/Input";
import { Data, DialogInfo } from "../utils/types";
import supabase from "../utils/supabase";
import { reverseMonth } from "../utils/getMonth";
import handleChangeNumber from "../utils/handleChangeNumber";
import adminStyles from "../styles/admin.module.css";

const Admin = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [periodicals, setPeriodicals] = useState<Data[]>([]);
  const [openEditMode, setOpenEditMode] = useState<DialogInfo>();
  const [updatedPeriodical, setUpdatedPeriodical] = useState<Data>({
    title: "",
    month: "",
    edition: 0,
    year: 2023,
    pages: 40,
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

  const handleClick = () => {
    (async () => {
      const { error } = await supabase.auth.signOut();

      if (error) {
        console.log(error);
        return;
      }

      window.location.href = "/";
    })();
  };

  return (
    <main className={adminStyles.main} data-active={openEditMode?.isOpen}>
      <div className={adminStyles.main__title}>
        <Breadcrumb />
        <h1 className="title">Edizioni</h1>
      </div>

      <Paragraph className={adminStyles.main__desc}>
        Benvenuto nella sezione "Edizioni". Qui puoi: visualizzare tutte le
        edizioni presenti all'interno del sito con i rispettivi dettagli;
        modificarne i valori; aggiungerne di nuove.
      </Paragraph>

      <Input
        placeholder="Cerca un'edizione per titolo, mese o anno"
        className={adminStyles.search_bar}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />

      <div className={adminStyles.card__container}>
        {periodicals
          .sort((a, b) => a.edition - b.edition)
          .map((periodical, index) => {
            if (
              periodical.month
                .toLowerCase()
                .indexOf(searchTerm.toLowerCase()) !== 0 &&
              periodical.title
                .toLowerCase()
                .indexOf(searchTerm.toLowerCase()) !== 0 &&
              String(periodical.year).indexOf(searchTerm)
            ) {
              return;
            }

            return (
              <Card
                key={index}
                periodical={periodical}
                setOpenEditMode={setOpenEditMode}
              />
            );
          })}
      </div>

      <a href="/admin/nuova edizione">
        <Button theme={`${adminStyles.accent_theme} ${adminStyles.add_btn}`}>
          Aggiungi
        </Button>
      </a>

      <Button
        theme={`${adminStyles.dark_theme} ${adminStyles.signOut_btn}`}
        onClick={handleClick}
      >
        Esci
      </Button>

      {openEditMode?.isOpen && (
        <EditMode
          setOpenEditMode={setOpenEditMode}
          open={openEditMode?.isOpen}
          periodical={openEditMode.periodical}
          updatedPeriodical={updatedPeriodical}
          setUpdatedPeriodical={setUpdatedPeriodical}
        />
      )}
    </main>
  );
};

const EditMode = ({
  setOpenEditMode,
  open,
  periodical,
  updatedPeriodical,
  setUpdatedPeriodical,
}: {
  setOpenEditMode: (openEditMode: DialogInfo) => void;
  open: boolean;
  periodical: Data;
  updatedPeriodical: Data;
  setUpdatedPeriodical: (updatedPeriodical: Data) => void;
}) => {
  // Creates a default "updatedPeriodical"
  useEffect(() => {
    setUpdatedPeriodical({ ...periodical });
  }, []);

  return (
    <dialog open={open} className={adminStyles.dialog}>
      <h1 className="title">Modifica</h1>
      <Paragraph>Stai modificando l'edizione "{periodical.title}".</Paragraph>

      <div className={adminStyles.input__wrapper}>
        <Input
          text="Titolo"
          placeholder={periodical.title}
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
              setUpdatedPeriodical({
                ...updatedPeriodical,
                title: periodical.title,
              });
              return;
            }

            setUpdatedPeriodical({ ...periodical, title: hypotheticalValue });
          }}
        />

        <div className={adminStyles.input__container}>
          <Input
            text="Edizione"
            placeholder={String(periodical.edition)}
            onChange={(e) =>
              handleChangeNumber(
                e,
                "edition",
                updatedPeriodical,
                setUpdatedPeriodical
              )
            }
          />
          <Input
            text="Pagine"
            placeholder={String(periodical.pages)}
            onChange={(e) =>
              handleChangeNumber(
                e,
                "pages",
                updatedPeriodical,
                setUpdatedPeriodical
              )
            }
          />
        </div>

        <div className={adminStyles.input__container}>
          <Input
            text="Mese"
            placeholder={reverseMonth(periodical.month)}
            onChange={(e) => {
              handleChangeNumber(
                e,
                "month",
                updatedPeriodical,
                setUpdatedPeriodical,
                1,
                2,
                true
              );
            }}
          />
          <Input
            text="Anno"
            placeholder={String(periodical.year)}
            onChange={(e) =>
              handleChangeNumber(
                e,
                "year",
                updatedPeriodical,
                setUpdatedPeriodical,
                4,
                4
              )
            }
          />
        </div>
      </div>

      <div className={adminStyles.btn__container}>
        <Button
          theme={adminStyles.dark_theme}
          onClick={() => {
            (async () => {
              const { error } = await supabase
                .from("periodical")
                .update({ ...updatedPeriodical })
                .eq("edition", periodical.edition);

              if (error) {
                console.log(error);
                return;
              }

              window.location.href = "/";
            })();
          }}
        >
          Salva
        </Button>
        <Button
          theme={adminStyles.dark_theme}
          onClick={() => {
            setOpenEditMode({ periodical, isOpen: false });
          }}
        >
          Annulla
        </Button>
      </div>
    </dialog>
  );
};

export default Admin;
