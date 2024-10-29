import { Suspense } from "react";
import MovieCredits from "../../../../../components/movie-credits";

export default function ShowCredits(paramObj) {
  console.log("paramObj : ", paramObj);
  const {
    params: { id },
  } = paramObj;

  return (
    <Suspense fallback={<h3>Loading movie credits</h3>}>
      <MovieCredits id={id} isBack />
    </Suspense>
  );
}
