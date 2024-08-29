import { API_URL } from "../app/(Home)/page";

async function getMovie(id) {
  return await fetch(`${API_URL}/${id}`).then((resp) => resp.json());
}

export default async function MovieInfo({ id }) {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
