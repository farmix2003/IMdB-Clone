import Movies from "@/components/Movies";
interface SearchParams {
  params: {
    searchTerm: string;
  };
}

const Search: React.FC<SearchParams> = async ({ params }) => {
  const searchTerms = params.searchTerm;
  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerms}&language=en-US&page=1&include_adult=true`
  ).then((res) => res.json());
  const results = data.results;
  console.log(searchTerms, results);
  return (
    <div>
      {results && results.length == 0 && (
        <h1 className="text-center pt-6">No movie found with this keywords</h1>
      )}
      {results && <Movies results={results} />}
    </div>
  );
};

export default Search;
