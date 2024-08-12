import Paragraph from "./Paragraph";
import arrowIcon from "../assets/arrowIcon.svg";
import { useRive, Layout, Fit } from "@rive-app/react-canvas";

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
    <section className="spam_instagram_section">
      <ReadingRiveComponent className="animation" />

      <div className="desc__container">
        <Paragraph className="section__desc">
          Non hai letto le edizioni precedenti?? Non c'è nessun problema: scendi
          e scarica tutto quello che ti serve!
        </Paragraph>

        <Paragraph className="section__desc">
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
          <img src={arrowIcon} alt="Freccia" className="arrow_icon" />
        </a>
      </div>
    </section>
  );
};

export default Section;

/*
    TODO:
    - Sistemare active navbar
    - Rendere responsive .riv
    - Sistemare animation di arrow
    - Trovare una bella immagine per Main.tsx
*/
