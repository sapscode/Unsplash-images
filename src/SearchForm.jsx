import { useGlobalContext } from "./context";

const SearchForm = () => {
	const { setSearch } = useGlobalContext();

	const handleSubmit = (e) => {
		e.preventDefault();
		setSearch(e.target.elements.search.value);
	};
	return (
		<>
			<h1 className="title">Unslpash Images</h1>
			<form className="search-form" action="" onSubmit={handleSubmit}>
				<input
					className="form-input search-input"
					placeholder="cat"
					type="text"
					name="search"
				/>
				<button className="btn" type="submit">
					Search
				</button>
			</form>
		</>
	);
};
export default SearchForm;
