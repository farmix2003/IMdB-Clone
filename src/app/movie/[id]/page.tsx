import Image from "next/image";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";
interface MoviePageId {
  params: {
    id: number;
  };
}
const MoviePage: React.FC<MoviePageId> = async ({ params }) => {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  ).then((res) => res.json());

  return (
    <div className="w-full p-0 md:p-5 flex flex-col md:flex-row items-start justify-center gap-5">
      <div className="w-full md:w-1/2">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            res.backdrop_path || res.poster_path
          }`}
          alt={res.title}
          width={600}
          height={500}
          className="sm:rounded-lg"
        />
      </div>
      <div className="w-full p-5 md:p-0 md:w-1/2 flex flex-col gap-4">
        <h1 className="text-4xl font-semibold">
          {res.original_name || res.original_title || res.title}
        </h1>
        <p className="text-md leading-8">{res.overview}</p>
        <div className="flex gap-4 items-center">
          <div className="flex">
            <span className="font-semibold mr-1">Release Date:</span>
            <p>{res.release_date || res.first_air_date}</p>
          </div>
          <div className="flex gap-x-1 items-center">
            <span className="font-semibold mr-1">
              <FiThumbsUp style={{ fontWeight: "bold" }} />
            </span>
            <p>{res.vote_count}</p>
          </div>
        </div>
        <div className="flex gap-10">
          {res?.origin_country?.map(
            (
              country:
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | Promise<React.AwaitedReactNode>
                | React.Key
                | null
                | undefined,
              idx: number
            ) => (
              <div key={idx} className="flex">
                <span className="font-semibold mr-1">Country: </span>
                <p> {country}</p>
              </div>
            )
          )}
          <div className="flex">
            <span className="font-semibold mr-1">Language: </span>
            <p>{res?.original_language?.toUpperCase()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
