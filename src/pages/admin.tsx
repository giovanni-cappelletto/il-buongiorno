import { useState, useEffect } from "react";
import Search from "../components/Search";
import Paragraph from "../components/Paragraph";
import Card from "../components/Card";
import Breadcrumb from "../components/Breadcrumb";
import Button from "../components/Button";
import { Data } from "../utils/types";
import supabase from "../utils/supabase";
import adminStyles from "../styles/admin.module.css";

const Admin = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
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
    <main className={adminStyles.main}>
      <div className={adminStyles.main__title}>
        <Breadcrumb />
        <h1 className="title">Edizioni</h1>
      </div>

      <Paragraph className={adminStyles.main__desc}>
        Benvenuto nella sezione "Edizioni". Qui puoi: visualizzare tutte le
        edizioni presenti all'interno del sito con i rispettivi dettagli;
        modificarne i valori; aggiungerne di nuove.
      </Paragraph>

      <Search setSearchTerm={setSearchTerm} />

      <div className={adminStyles.card__container}>
        {periodicals.map((periodical, index) => {
          if (
            periodical.month.toLowerCase().indexOf(searchTerm.toLowerCase()) !==
              0 &&
            periodical.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !==
              0 &&
            String(periodical.year).indexOf(searchTerm)
          ) {
            return;
          }

          return <Card key={index} periodical={periodical} />;
        })}
      </div>

      <a href="/admin/nuova edizione">
        <Button theme={`${adminStyles.accent_theme} ${adminStyles.add_btn}`}>
          Aggiungi
        </Button>
      </a>
    </main>
  );
};

export default Admin;
