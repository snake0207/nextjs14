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
        <h5 className={styles.name}>
          {similar.title} ({similar.id})
        </h5>
        <p className={styles.overview}>
          {!similar.isFull
            ? similar.overview
                .split(" ")
                .filter((ov, i) => i < 10)
                .join(" ")
            : similar.overview}
        </p>
        <span onClick={() => onClick(similar.id, !similar.isFull)}>
          {!similar.isFull ? "전체" : "요약"}
        </span>
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
    const _datas = datas.map(d => {
      if (d.id === sid) {
        return {...d, isFull: isFull};
      }
      return {...d};
    });
    setDatas(_datas);
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
