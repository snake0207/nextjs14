import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default async function MovieDetail({ params: { id } }) {
  return (
    <>
      <Suspense fallback={<h3>Loading movie info</h3>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h3>Loading movie video</h3>}>
        <MovieVideos id={id} />
      </Suspense>
    </>
  );
}
