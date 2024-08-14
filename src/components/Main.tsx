import Paragraph from "./Paragraph";
import mainImage from "../assets/mainImage.png";
import homeStyles from "../styles/home.module.css";

const Main = () => {
  return (
    <main id="home" className={homeStyles.main}>
      <div className={homeStyles.main__content}>
        <h1 className={`${homeStyles.main__title} title`}>Il Buongiorno</h1>

        <Paragraph className={homeStyles.main__desc}>
          Vuoi leggere l'articolo scritto da un tuo amico oppure vuoi rimanere
          aggiornato su ciò che accade a scuola?
        </Paragraph>

        <Paragraph className={homeStyles.main__desc}>
          Scarica allora l'ultima edizione del giornalino!
        </Paragraph>

        <DownloadBtn link="" month="giugno" />
      </div>

      <img src={mainImage} alt="Immagine" className={homeStyles.main__image} />
    </main>
  );
};

const DownloadBtn = ({ link, month }: { link: string; month: string }) => {
  return (
    <a
      href={link}
      className={`${homeStyles.download_btn} ${homeStyles.btn}`}
      download={`Giornalino di ${month[0].toUpperCase() + month.slice(1)}`}
    >
      Scarica
    </a>
  );
};

export default Main;
