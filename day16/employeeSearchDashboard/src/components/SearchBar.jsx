const SearchBar = ({search, setSearch}) => {
    return(
        <input
         type="text"
         value={search}
         onChange={e => setSearch(e.target.value)}
         placeholder="Enter Employee name to search"
        />
    )
}

export default SearchBar;