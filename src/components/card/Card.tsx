import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";
interface MovieItem {
  id: number;
  backdrop_path?: string | null;
  poster_path?: string | null;
  overview: string;
  original_title?: string;
  original_name?: string;
  title?: string;
  release_date?: string;
  first_air_date?: string;
  vote_count: number;
}

interface MoviesCard {
  item: MovieItem;
}
const Card: React.FC<MoviesCard> = ({ item }) => {
  return (
    <div className="group p-4 cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${item.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            item.backdrop_path || item.poster_path
          }`}
          width={400}
          height={400}
          alt={`${item.title}`}
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
        />
      </Link>
      <div className="p-2">
        <p className="line-clamp-2 text-md">{item.overview}</p>
        <h1 className="text-lg font-semibold truncate">
          {item.original_title || item.original_name || item.title}
        </h1>
        <div className="flex gap-4 items-center">
          <p>{item.release_date || item.first_air_date}</p>
          <div className="flex gap-x-1 items-center">
            <FiThumbsUp />
            <p>{item.vote_count}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
