import { Suspense } from "react";
import MovieSimilar from "../../../../../components/movie-similar";

export default function ShowSimilar(paramObj) {
  console.log("paramObj : ", paramObj);
  const {
    params: { id },
  } = paramObj;

  return (
    <Suspense fallback={<h3>Loading movie similar</h3>}>
      <MovieSimilar id={id} isBack />
    </Suspense>
  );
}
