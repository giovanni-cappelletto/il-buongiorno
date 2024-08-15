import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import Paragraph from "../components/Paragraph";
import Form from "../components/Form";
import Card from "../components/Card";
import { Data } from "../utils/types";
import adminStyles from "../styles/admin.module.css";

const Add = () => {
  const [periodical, setPeriodical] = useState<Data>({
    id: 2,
    title: "Il latte dei sogni",
    month: "Novembre",
    edition: 2,
    year: 2022,
    pages: 40,
  });

  return (
    <main className={`${adminStyles.main} ${adminStyles.new_edition_section}`}>
      <div className={adminStyles.main__title}>
        <Breadcrumb />
        <h1 className="title">Nuova edizione</h1>
      </div>

      <div>
        <h3 className={adminStyles.chapter__title}>Inserisci i dati</h3>

        <Paragraph className={adminStyles.main__desc}>
          Per effettuare questa operazione, assicurati di{" "}
          <a href="https://www.ilovepdf.com/it/comprimere_pdf" target="_blank">
            comprimere il PDF
          </a>{" "}
          in modo da ridurne la dimensione prepara una foto della copertian di
          dimensione ...x...
        </Paragraph>

        <Form periodical={periodical} setPeriodical={setPeriodical} />
      </div>

      <div>
        <h3 className={adminStyles.chapter__title}>Live preview</h3>
        <Paragraph className={adminStyles.main__desc}>
          L'immagine seguente rappresenta il modo in cui verrà visualizzata la
          nuova edizione nella sezione "Edizioni".
        </Paragraph>

        <Card periodical={periodical} disabled={true} />
      </div>
    </main>
  );
};

export default Add;
