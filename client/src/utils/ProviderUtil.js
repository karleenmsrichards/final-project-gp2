import axios from "axios";

const ProviderUtil = async(url, setProviders) => {
	try {
		const response = await axios.get(url);
		setProviders(response.data);
	} catch (error) {
		console.error(error);
	}
};

export default ProviderUtil;
