import Property from "./Property";
import Button from "./Button";
import { Data } from "../utils/types";
import getAssets from "../utils/getAssets";
import adminStyles from "../styles/admin.module.css";

const Card = ({ periodical }: { periodical: Data }) => {
  return (
    <div className={adminStyles.card}>
      <div className={adminStyles.card__content}>
        <h2 className={adminStyles.card__title}>{periodical.title}</h2>

        <Property text={"Edizione"} value={periodical.edition} />
        <Property text={"Pagine"} value={periodical.pages} />
        <Property text={"Mese"} value={periodical.month} />
        <Property text={"Anno"} value={periodical.year} />

        <Button theme={adminStyles.dark_theme}>Modifica</Button>
      </div>

      <a
        href={getAssets("pdf", periodical.year, periodical.month)}
        download={`Giornalino di ${periodical.month}`}
        target="_blank"
      >
        <img
          src={getAssets("thumbnails", periodical.year, periodical.month)}
          alt="Copertina"
          className={adminStyles.card__image}
        />
      </a>
    </div>
  );
};

export default Card;
