const getAssets = (
  type: string = "thumbnails",
  year: number = 2022,
  month: string = "Aprile"
) => {
  const extension = type === "thumbnails" ? ".png" : ".pdf";

  const link: string = `https://${
    import.meta.env.VITE_PROJECT_ID
  }.supabase.co/storage/v1/object/public/periodicals/${type}/${year}/${month}${extension}`;

  return link;
};

export default getAssets;
