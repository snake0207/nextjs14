import Link from "next/link";
import { API_URL } from "../app/constant";
import styles from "../styles/movie-similar.module.css";

async function getSimilars(id) {
  return await fetch(`${API_URL}/${id}/similar`).then((resp) => resp.json());
}

function Similar({ similar }) {
  return (
    <div className={styles.container}>
      <img
        src={similar.poster_path}
        alt={similar.title}
        className={styles.poster}
      />
      <div className={styles.contents}>
        <h5 className={styles.name}>{similar.title}</h5>
        <p className={styles.overview}>
          {!similar.adult
            ? similar.overview
                .split(" ")
                .filter((ov, i) => i < 30)
                .join(" ")
            : similar.overview}
          ...
        </p>
      </div>
    </div>
  );
}

export default async function MovieSimilar({
  id,
  isBack = false,
  scroll = false,
}) {
  const similars = await getSimilars(id);

  console.log(similars);

  return (
    <>
      {isBack && (
        <Link href={`/movies/${id}`} className={styles.back}>
          &larr; Back
        </Link>
      )}
      {similars.map(
        (similar) =>
          similar.poster_path && <Similar key={similar.id} similar={similar} />
      )}
    </>
  );
}
