import { API_URL } from "../app/constant";
import SimilarLayout from "./similar";

async function getSimilars(id) {
  return await fetch(`${API_URL}/${id}/similar`).then((resp) => resp.json());
}

export default async function MovieSimilar({ id, isBack = false }) {
  const similars = await getSimilars(id);

  console.log(similars);

  return <SimilarLayout id={id} similars={similars} />;
}
