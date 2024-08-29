import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constant";

export const metadata = {
  title: "Home",
};

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  return await fetch(API_URL).then((resp) => resp.json());
}

export default async function Home() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}
