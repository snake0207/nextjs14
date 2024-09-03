import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import MovieCredits from "../../../../components/movie-credits";

export async function generateMetadata({ params: { id } }) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params: { id } }) {
  return (
    <>
      <Suspense fallback={<h3>Loading movie info</h3>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h3>Loading movie Credits</h3>}>
        <MovieCredits id={id} scroll />
      </Suspense>
      <Suspense fallback={<h3>Loading movie video</h3>}>
        <MovieVideos id={id} />
      </Suspense>
    </>
  );
}
