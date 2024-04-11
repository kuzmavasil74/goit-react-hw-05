import css from './SearchMoviesForm.module.css'
const SearchMoviesForm = ({
  searchQuery,
  setSearchQuery,
  handleSearch,
  handleSubmit,
  handleKeyDown,
}) => {
  return (
    <div className={css.searchContainer}>
      <input
        className={css.inputSearch}
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        onSubmit={handleSubmit}
      />
      <button className={css.buttonSearch} onClick={handleSearch}>
        Search
      </button>
    </div>
  )
}

export default SearchMoviesForm
