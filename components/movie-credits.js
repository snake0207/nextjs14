import { API_URL } from "../app/constant";
import styles from "../styles/movie-credits.module.css";

async function getCredits(id) {
  return await fetch(`${API_URL}/${id}/credits`).then((resp) => resp.json());
}

function Credit({ path, name }) {
  return (
    <div className={styles.credit}>
      <img src={path} alt={name} />
      <h5>{name}</h5>
    </div>
  );
}

export default async function MovieCredits({ id }) {
  const credits = await getCredits(id);

  console.log(JSON.stringify(credits));

  return (
    <div className={styles.container}>
      <h2>Credits</h2>
      <div className={styles.credits}>
        {credits.map(
          (credit) =>
            credit.profile_path && (
              <Credit
                key={credit.id}
                profile_path={credit.profile_path}
                name={credit.name}
              />
            )
        )}
      </div>
    </div>
  );
}
