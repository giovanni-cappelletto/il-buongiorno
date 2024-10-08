import Paragraph from "./Paragraph";
import homeStyles from "../styles/home.module.css";

const Help = () => {
  return (
    <section id="aiutaci" className={homeStyles.help_section}>
      <h1 className="title">Aiutaci!</h1>

      <Paragraph className={homeStyles.help__desc}>
        Ti piace il progetto e desideri collaborare con noi?? Nessun problema,
        ci sono un sacco di posti disponibili e ruoli diversi!
      </Paragraph>
      <Paragraph className={homeStyles.help__desc}>
        Il laboratorio pomeridiano 'Il Buongiorno | Il Giornalino Del Don Bosco'
        si tiene al mercoledì, dalle 14.00 alle 15.00.
      </Paragraph>
      <Paragraph className={homeStyles.help__desc}>
        Al termine dell'esperienza, se frequenti terza/quarta/quinta superiore,
        ti verranno riconosciute fino ad un massimo di{" "}
        <span className={homeStyles.bold}>50 ore</span>, a seconda di quanto tu
        ti sia impegnato durante il progetto.
      </Paragraph>
      <Paragraph className={homeStyles.help__desc}>
        Hai ancora qualche dubbio? Rivolgiti ai prof. Federico Contini e Anna
        Tasson.
      </Paragraph>
    </section>
  );
};

export default Help;
