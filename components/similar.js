"use client";

import Link from "next/link";
import styles from "../styles/movie-similar.module.css";
import { useEffect, useState } from "react";

function Similar({ similar, onClick }) {
  return (
    <div className={styles.container}>
      <img
        src={similar.poster_path}
        alt={similar.title}
        className={styles.poster}
      />
      <div className={styles.contents}>
        <div className={styles.title}>
          <h5>
            {similar.title} ({similar.id})
          </h5>
        </div>
        <div className={styles.overview}>
          <span onClick={() => onClick(similar.id, !similar.isFull)}>
            {!similar.isFull
              ? similar.overview
                  .split(" ")
                  .filter((ov, i) => i < 10)
                  .join(" ")
              : similar.overview}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function SimilarLayout({ id, similars = [] }) {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    setDatas(similars.map((s) => Object.assign({}, { ...s, isFull: false })));
  }, []);

  function onClick(sid, isFull) {
    console.log(sid, isFull);
    setDatas(
      datas.map((d) => {
        if (d.id === sid) {
          return { ...d, isFull: isFull };
        }
        return d;
      })
    );
  }

  return (
    <>
      <Link href={`/movies/${id}`} className={styles.back}>
        &larr; Back
      </Link>
      {datas.map((data) => (
        <Similar key={data.id} similar={data} onClick={onClick} />
      ))}
    </>
  );
}
