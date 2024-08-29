import { API_URL } from "../app/(Home)/page";
import styles from "../styles/movie-videos.module.css";

async function getVideos(id) {
  return await fetch(`${API_URL}/${id}/videos`).then((resp) => resp.json());
}

export default async function MovieVideos({ id }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.key}
          src={`https://www.youtube.com/embed/${video.key}`}
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title={video.name}
        />
      ))}
    </div>
  );
}
