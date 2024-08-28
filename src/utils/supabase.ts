import { createClient } from "@supabase/supabase-js";
import { Database } from "./database.types";

const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

const insertPeriodicalInfos = async ({
  title,
  month,
  edition,
  year,
  pages,
}: {
  title: string;
  month: string;
  edition: number;
  year: number;
  pages: number;
}, notify: (prop: string, err?: string) => void) => {
  const { error } = await supabase
    .from("periodical")
    .insert({ title, month, edition, year, pages });

  if (error) {
    notify("", "Alcune informazioni inserite potrebbero già essere presenti nel database.")  
    console.log(error);
  }
};

const insertPeriodicalFiles = async (
  type: string,
  file: File,
  year: number,
  notify: (prop: string, err?: string) => void
) => {
  const path =
    type === "pdf"
      ? `pdf/${year}/${file.name}`
      : `thumbnails/${year}/${file.name}`;

  const { error } = await supabase.storage
    .from("periodicals")
    .upload(path, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    notify("", "Il file caricato non va bene. Controlla che non sia già stato inserito.")  
    console.log(error);
  }

  window.location.href = "/admin"
};

export default supabase;
export { insertPeriodicalInfos, insertPeriodicalFiles };
