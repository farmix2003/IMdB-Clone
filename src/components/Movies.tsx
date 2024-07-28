import React from "react";
import Card from "./card/Card";
interface MoviesProps {
  results: [];
}
const Movies: React.FC<MoviesProps> = ({ results }) => {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 max-w-6xl mx-auto py-4">
      {results.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
};

export default Movies;
