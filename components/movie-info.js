import Link from "next/link";
import { API_URL } from "../app/constant";
import styles from "../styles/movie-info.module.css";

export async function getMovie(id) {
  return await fetch(`${API_URL}/${id}`).then((resp) => resp.json());
}

export default async function MovieInfo({ id }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        className={styles.poster}
        alt={movie.title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐ {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target="_blank">
          Homepage &rarr;
        </a>
        <div className={styles.etc}>
          <Link href={`/movies/${id}/credits`}>Credits</Link>
          <Link href={`/movies/${id}/similar`}>Similars</Link>
        </div>
      </div>
    </div>
  );
}
