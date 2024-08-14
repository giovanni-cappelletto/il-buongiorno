import Paragraph from "./Paragraph";
import arrowIcon from "../assets/arrowIcon.svg";
import { useRive, Layout, Fit } from "@rive-app/react-canvas";
import homeStyles from "../styles/home.module.css";

const Section = () => {
  const { RiveComponent: ReadingRiveComponent } = useRive({
    src: "animation.riv",
    autoplay: true,
    stateMachines: "State Machine 1",
    animations: ["Initialize", "Loop Animation"],
    layout: new Layout({
      fit: Fit.FitWidth,
    }),
  });

  return (
    <section className={`${homeStyles.spam_instagram_section}`}>
      <ReadingRiveComponent className={homeStyles.animation} />

      <div className={homeStyles.desc__container}>
        <Paragraph className={homeStyles.section__desc}>
          Non hai letto le edizioni precedenti?? Non c'è nessun problema: scendi
          e scarica tutto quello che ti serve!
        </Paragraph>

        <Paragraph className={homeStyles.section__desc}>
          Aspetta però un attimo!! Prima di scendere, seguici su{" "}
          <a href="https://www.instagram.com/ilbuongiornodb/" target="_blank">
            Instagram
          </a>{" "}
          per rimanere costantemente aggiornato ed ascolta il nostro{" "}
          <a
            href="https://open.spotify.com/show/7ChMjhCqr3HhAOMRoq8NP9"
            target="_blank"
          >
            podcast
          </a>
          .
        </Paragraph>

        <a href="#giornalini">
          <img
            src={arrowIcon}
            alt="Freccia"
            className={homeStyles.arrow_icon}
          />
        </a>
      </div>
    </section>
  );
};

export default Section;
