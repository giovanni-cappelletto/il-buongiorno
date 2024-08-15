import { Data } from "../utils/types";
import Button from "./Button";
import Paragraph from "./Paragraph";
import adminStyles from "../styles/admin.module.css";

const Form = ({
  periodical,
  setPeriodical,
}: {
  periodical: Data;
  setPeriodical: (periodical: Data) => void;
}) => {
  return (
    <form>
      <div className={adminStyles.form__container}>
        <Input text="Titolo" />

        <div className={adminStyles.input__container}>
          <Input text="Pagine" />
          <Input text="Edizione" />
        </div>

        <div className={adminStyles.btn__container}>
          <Button theme={adminStyles.dark_theme}>Copertina</Button>
          <Button theme={adminStyles.dark_theme}>PDF</Button>
        </div>
      </div>

      <Dropper />

      <Button theme={`${adminStyles.accent_theme} ${adminStyles.save_btn}`}>
        Salva
      </Button>
    </form>
  );
};

const Input = ({ text }: { text: string }) => {
  return (
    <div className={adminStyles.input}>
      <span>{text}:</span>
      <input type="text" />
    </div>
  );
};

const Dropper = () => {
  return (
    <div className={adminStyles.dropper}>
      <Paragraph>Copertina</Paragraph>
    </div>
  );
};

export default Form;
