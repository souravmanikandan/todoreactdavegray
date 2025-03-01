const SearchItem = ({ searchItem, setSearchItem }) => {
  return (
    <form className="w-11/12 self-center" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search" className="absolute -left-full"></label>
      <input
        type="text"
        id="search"
        name="search"
        className="border border-black w-full p-1"
        placeholder="search"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;
