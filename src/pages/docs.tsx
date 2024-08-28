import Paragraph from "../components/Paragraph";
import Breadcrumb from "../components/Breadcrumb";
import adminStyles from "../styles/admin.module.css";
import docsStyles from "../styles/docs.module.css";

const Docs = () => {
  return (
    <main className={adminStyles.main}>
      <div className={adminStyles.main__title}>
        <Breadcrumb />
        <h1 className="title">Docs</h1>
      </div>

      <h3 className={adminStyles.chapter__title}>Aggiungere nuove edizioni</h3>

      <Paragraph className={docsStyles.main__desc}>
        Innanzitutto, assicurati di{" "}
        <a href="https://www.ilovepdf.com/it/comprimere_pdf" target="_blank">
          comprimere il PDF
        </a>{" "}
        in modo da ridurne la dimensione e cambia il nome del file in "Mese". Ad
        esempio, se l'edizione è del mese di aprile, il file avrà come nome
        "Aprile", mentre l'estensione sarà "pdf".
      </Paragraph>

      <Paragraph className={docsStyles.main__desc}>
        Successivamente accedi a{" "}
        <a href="https://www.figma.com/" target="_blank">
          figma
        </a>{" "}
        e crea un draft utilizzando il tasto "New design file".
      </Paragraph>

      <Paragraph className={docsStyles.main__desc}>
        Ora sposta il mouse nella zona centrale dello schermo, premi "f", tieni
        premuto il tasto sinistro del mouse e sposta il cursore. Se hai fatto
        tutto correttamente dovresti vedere una sorta di finestra bianca, che in
        gergo è chiamata "frame".
      </Paragraph>

      <Paragraph className={docsStyles.main__desc}>
        A questo punto, clicca sopra il frame per selezionarlo (se è già
        selezionato, dovresti vedere un quadratino bianco con contorno azzurro
        per ogni lato).
      </Paragraph>

      <Paragraph className={docsStyles.main__desc}>
        Cerca la sezione "Layout" sul menù a destra e cambia i due input
        rispettivamente con "734" e "1038".
      </Paragraph>

      <Paragraph className={docsStyles.main__desc}>
        Scatta uno screenshot della copertina e, una volta pronto, trascinalo
        all'interno di figma e poi all'interno del frame.
      </Paragraph>

      <Paragraph className={docsStyles.main__desc}>
        Ora, seleziona la copertina e, tenendo premuto shift, sposta uno degli
        angoli per ingrandire l'immagine.
      </Paragraph>

      <Paragraph className={docsStyles.main__desc}>
        Assicurati quindi che l'immagine copra tutto il frame (non si deve più
        vedere il bianco) e che sia centrata in esso.
      </Paragraph>

      <Paragraph className={docsStyles.main__desc}>
        Inoltre, controlla che nel menù a sinistra, si legga solo il nome del
        frame (ad esempio, "Frame 1") oppure che il frame stia contenendo lo
        screenshot.
      </Paragraph>

      <Paragraph className={docsStyles.main__desc}>
        Se tutti i passaggi sono stati svolti correttamente, non ti resta che
        scaricare la tua immagine. Seleziona quindi il frame, espandi la voce
        "Export" sul menù a destra ed esporta il frame in formato "png".
      </Paragraph>

      <Paragraph className={docsStyles.main__desc}>
        Cambia il nome del file secondo questa convenzione: "Mese". Ad esempio,
        se l'edizione è del mese di aprile, il nome del file sarà "Aprile" e
        l'estensione "png".
      </Paragraph>
    </main>
  );
};

export default Docs;
