import Link from "next/link";
import { API_URL } from "../app/constant";
import styles from "../styles/movie-credits.module.css";

async function getCredits(id) {
  return await fetch(`${API_URL}/${id}/credits`).then((resp) => resp.json());
}

function Credit({ path, name }) {
  return (
    <div className={styles.credit}>
      <img src={path} alt={name} />
      <h5 className={styles.name}>{name}</h5>
    </div>
  );
}

export default async function MovieCredits({
  id,
  isBack = false,
  scroll = false,
}) {
  const credits = await getCredits(id);

  return (
    <>
      {isBack && (
        <Link href={`/movies/${id}`} className={styles.header}>
          &larr; Back
        </Link>
      )}
      {scroll ? (
        <div className={styles.scroll}>
          {credits.map(
            (credit) =>
              credit.profile_path && (
                <Credit
                  key={credit.id}
                  path={credit.profile_path}
                  name={credit.name}
                />
              )
          )}
        </div>
      ) : (
        <div className={styles.container}>
          {credits.map(
            (credit) =>
              credit.profile_path && (
                <Credit
                  key={credit.id}
                  path={credit.profile_path}
                  name={credit.name}
                />
              )
          )}
        </div>
      )}
    </>
  );
}
