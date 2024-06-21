import Movies from "@/components/Movies";
import React from "react";
const IMDB_API: any = process.env.API_KEY;
interface HomeProps {
  searchParams: any;
}
const Home: React.FC<HomeProps> = async ({ searchParams }) => {
  const genre = searchParams.genre || "popular";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY_ACCESS_TOKEN}`,
    },
  };

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"
    }?language=en-US&page=1`,
    options
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to catch movies");
  }
  const results = data.results;

  return (
    <div>
      <Movies results={results} />
    </div>
  );
};

export default Home;
