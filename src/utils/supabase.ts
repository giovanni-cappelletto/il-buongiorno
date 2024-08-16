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
}) => {
  const { error } = await supabase
    .from("periodical")
    .insert({ title, month, edition, year, pages });

  if (error) {
    console.log(error);
  }
};

const insertPeriodicalFiles = async (
  type: string,
  file: File,
  year: number
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
    console.log(error);
  }
};

export default supabase;
export { insertPeriodicalInfos, insertPeriodicalFiles };
