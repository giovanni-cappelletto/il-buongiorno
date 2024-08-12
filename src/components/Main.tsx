import Paragraph from "./Paragraph";
import mainImage from "../assets/mainImage.png";

const Main = () => {
  return (
    <main id="home">
      <div className="main__content">
        <h1 className="main__title title">Il Buongiorno</h1>

        <Paragraph className="main__desc">
          Vuoi leggere l'articolo scritto da un tuo amico oppure vuoi rimanere
          aggiornato su ciò che accade a scuola?
        </Paragraph>

        <Paragraph className="main__desc">
          Scarica allora l'ultima edizione del giornalino!
        </Paragraph>

        <DownloadBtn link="" month="giugno" />
      </div>

      <img src={mainImage} alt="Immagine" className="main__image" />
    </main>
  );
};

const DownloadBtn = ({ link, month }: { link: string; month: string }) => {
  return (
    <a
      href={link}
      className="download_btn btn"
      download={`Giornalino di ${month[0].toUpperCase() + month.slice(1)}`}
    >
      Scarica
    </a>
  );
};

export default Main;
