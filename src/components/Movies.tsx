import React from "react";
interface MoviesProps {
  results: [];
}
const Movies: React.FC<MoviesProps> = ({ results }) => {
  console.log(results);
  return (
    <>
      {results.map((item: any, index) => (
        <div key={index}>
          <h1>
            {item.original_title
              ? item.original_title
              : item.original_name
              ? item.original_name
              : item.title}
          </h1>
        </div>
      ))}
    </>
  );
};

export default Movies;
