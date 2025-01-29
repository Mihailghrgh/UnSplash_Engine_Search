import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearch } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;

    setSearch(searchValue);
  };
  return (
    <section>
      <h1 className="title">xiao huang shu</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="Search for anything..."
        />
        <button type="submit" className="btn">
          {" "}
          Search{" "}
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
