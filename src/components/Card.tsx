import Property from "./Property";
import Button from "./Button";
import { Data, DialogInfo } from "../utils/types";
import getAssets from "../utils/getAssets";
import supabase from "../utils/supabase";
import adminStyles from "../styles/admin.module.css";

const Card = ({
  periodical,
  setOpenEditMode,
}: {
  periodical: Data;
  setOpenEditMode: (openEditMode: DialogInfo) => void;
}) => {
  return (
    <div className={adminStyles.card}>
      <div className={adminStyles.card__content}>
        <h2 className={adminStyles.card__title}>{periodical.title}</h2>

        <Property text={"Edizione"} value={periodical.edition} />
        <Property text={"Pagine"} value={periodical.pages} />
        <Property text={"Mese"} value={periodical.month} />
        <Property text={"Anno"} value={periodical.year} />

        <div className={adminStyles.btn__container}>
          <Button
            theme={adminStyles.dark_theme}
            onClick={() => {
              setOpenEditMode({ isOpen: true, periodical });
            }}
          >
            Modifica
          </Button>
          <Button
            theme={adminStyles.accent_theme}
            onClick={() => {
              (async () => {
                // Deletes row
                const response = await supabase
                  .from("periodical")
                  .delete()
                  .eq("edition", periodical.edition);

                console.log(`Deleting row: ${response}`);

                // Deletes thumbnail and PDF
                const { data, error } = await supabase.storage
                  .from("periodicals")
                  .remove([
                    `thumbnails/${periodical.year}/${periodical.month}.png`,
                    `pdf/${periodical.year}/${periodical.month}.pdf`,
                  ]);

                if (error) {
                  console.log(error);
                  return;
                }

                window.location.href = "/";
              })();
            }}
          >
            Elimina
          </Button>
        </div>
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
