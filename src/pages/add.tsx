import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import Paragraph from "../components/Paragraph";
import Form from "../components/Form";
import { Data } from "../utils/types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import adminStyles from "../styles/admin.module.css";

const Add = () => {
  const [periodical, setPeriodical] = useState<Data>({
    title: "Il latte dei sogni",
    month: "Novembre",
    edition: 2,
    year: 2022,
    pages: 40,
  });

  const notify = (prop: string, err?: string) => {
    const options = {
      theme: "dark",
      autoClose: 2000,
    };

    if (err) {
      toast.error(err, options);
      return;
    }

    const msg =
      prop === "thumbnail"
        ? "La copertina è pronta per essere salvata!"
        : "Il PDF è pronto per essere salvato!";
    toast.success(msg, options);
  };

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

        <Form
          periodical={periodical}
          setPeriodical={setPeriodical}
          notify={notify}
        />
      </div>
      <ToastContainer className={adminStyles.toast__container} />
    </main>
  );
};

export default Add;
