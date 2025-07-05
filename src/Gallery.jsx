import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./context";
import { toast } from "react-toastify";

const url = `https://api.unsplash.com/search/photos?client_id=${
	import.meta.env.VITE_API_KEY
}`;
const Gallery = () => {
	const { search, isDarkTheme } = useGlobalContext();

	const { data, isError, error } = useQuery({
		queryKey: ["images", search],
		queryFn: async () => {
			const resp = await axios.get(`${url}&query=${search}`);
			return resp.data;
		},
		retry: false
	});

	const errMsg = error?.response.data.errors[0];

	const showError = (errorMessage = errMsg) => {
		toast.error(errorMessage, {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: isDarkTheme ? "dark" : "light"
		});
	};

	if (isError) {
		return <section className="image-contianer">{showError()}</section>;
	}

	const results = data?.results;
	if (results < 1) {
		return (
			<section className="image-contianer">
				{showError("No result found")}
			</section>
		);
	}

	return (
		<section className="image-container">
			{results?.map((item) => {
				const url = item?.urls?.regular;
				return (
					<img
						src={url}
						key={item.id}
						alt={item.alt_description}
						className="img"
					></img>
				);
			})}
		</section>
	);
};
export default Gallery;
