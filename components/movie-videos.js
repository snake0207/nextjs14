import { API_URL } from "../app/(Home)/page";

async function getVideos(id) {
  return await fetch(`${API_URL}/${id}/videos`).then((resp) => resp.json());
}

export default async function MovieVideos({ id }) {
  const video = await getVideos(id);
  return <h6>{JSON.stringify(video)}</h6>;
}
