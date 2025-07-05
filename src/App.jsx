import { ToastContainer } from "react-toastify";
import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";

const App = () => {
	return (
		<>
			<ThemeToggle />
			<ToastContainer />
			<SearchForm />
			<Gallery />
		</>
	);
};
export default App;
