import { useState } from "react";
import MovieInput from "./MovieInput.jsx";
import MovieBox from "./MovieBox.jsx";

function App() {
  const [MoviesList, NewMovie] = useState([]);

  const MoviesComponents = MoviesList.map((movieT, index) => {
    return <MovieBox key={index} movieName={movieT.movieName} />;
  });

  return (
    <>
      <MovieInput setMovies={NewMovie} MoviesList={MoviesList} />
      {MoviesComponents}
    </>
  );
}

export default App;
