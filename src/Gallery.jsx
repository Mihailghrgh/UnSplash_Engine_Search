import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./context";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;


const Gallery = () => {
  const { search } = useGlobalContext();

  const response = useQuery({
    queryKey: ["images", search],
    queryFn: async () => {
      const response = await axios.get(`${url}&query=${search}`);
      return response.data;
    },
  });

  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }

  if (response.isError) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  }

  const results = response.data.results;

  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4> No results found with the input....</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        return (
          <img
            key={item.id}
            src={item?.urls?.regular}
            alt={item.alt_description}
            className="img"
          ></img>
        );
      })}
    </section>
  );
};
export default Gallery;
