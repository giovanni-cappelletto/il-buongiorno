import adminStyles from "../styles/admin.module.css";

const Search = ({
  setSearchTerm,
}: {
  setSearchTerm: (searchTerm: string) => void;
}) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Cerca un'edizione per titolo, mese o anno"
        className={adminStyles.search_bar}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
    </form>
  );
};

export default Search;
